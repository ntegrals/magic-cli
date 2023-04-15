import { ChatOpenAI } from "langchain/chat_models/openai";
import dotenv from "dotenv";
import { Spinner } from "../utils/spinner";
import { readFile } from "../utils/system";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import chalk from "chalk";

dotenv.config();

export const runCompleteChain = async (
  filePath: string,
  instruction: string,
  loadingMessage: string
) => {
  let file;
  try {
    file = readFile(filePath);
  } catch (error) {
    if (!filePath) {
      console.log(chalk.red("Please provide a file path."));
    } else {
      console.log(chalk.red("Could not read file: " + '"' + filePath + '"'));
    }
    return;
  }
  const output = await runChain(instruction, file, loadingMessage);
  console.log(output.text);
  return output.text;
};

// gpt-4
// "gpt-3.5-turbo"
export const runChain = async (
  instructTemplate: string,
  data: string,
  loadingMessage: string = "Thinking...",
  //   modelName: string = "gpt-4"
  modelName: string = "gpt-3.5-turbo"
) => {
  const spinner = new Spinner(loadingMessage);
  let messages;

  const chat = new ChatOpenAI({ temperature: 0, modelName: modelName });

  //   if (modelName === "gpt-4") {
  //   messages = await constructPromptGPT4(instructTemplate, data);
  //   console.log(messages);
  //   } else {
  //     messages = await constructPromptGPT3Turbo(input);
  //   }

  messages = [
    new SystemChatMessage(instructTemplate),
    new HumanChatMessage(data),
  ];

  const response = await chat.call(messages);

  spinner.success("Done!");
  //   console.log(response.text);
  return response;
};
