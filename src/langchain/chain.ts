import { ChatOpenAI } from "langchain/chat_models/openai";
import dotenv from "dotenv";
import { Spinner } from "../utils/spinner";
import { readFile } from "../utils/system";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import chalk from "chalk";
import { CallbackManager } from "langchain/callbacks";

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

  const chat = new ChatOpenAI({
    temperature: 0,
    modelName: modelName,
    streaming: true,
    callbackManager: CallbackManager.fromHandlers({
      async handleLLMNewToken(token: string) {
        // console.log(token);
        spinner.stop();
        // Write stream to file
        process.stdout.write(chalk.blue(token));
      },
    }),
  });

  messages = [
    new SystemChatMessage(instructTemplate),
    new HumanChatMessage(data),
  ];

  const response = await chat.call(messages);

  // spinner.success("Done!");
  //   console.log(response.text);
  return response;
};
