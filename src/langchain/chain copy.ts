import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import dotenv from "dotenv";
import { Spinner } from "../utils/spinner";
import { codeReviewInstruction } from "./prompts";
import { readFile } from "../utils/system";
// import { HumanChatMessage } from "langchain/dist/schema";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

dotenv.config();

// Makes use of the system message to instruct the model
const constructPromptGPT4 = async (instructTemplate: string, data: string) => {
  // For chat models, we provide a `ChatPromptTemplate` class that can be used to format chat prompts.
  //   const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  //     SystemMessagePromptTemplate.fromTemplate(instructTemplate),
  //     // HumanMessagePromptTemplate.fromTemplate(),
  //     new HumanChatMessage(
  //       "Hello, I am a bot that can translate English to French"
  //     ),
  //   ]);
  //   console.log(chatPrompt);
  // The result can be formatted as a string using the `format` method.
  //   const responseC = await chatPrompt.formatPromptValue({
  //     input_language: "English",
  //     output_language: "French",
  //     text: data,
  //   });
  //   const messages = responseC.toChatMessages();
  //   return messages;
};

// // Makes use of the user message to instruct the model
// const constructPromptGPT3Turbo = async (data: string) => {
//   // For chat models, we provide a `ChatPromptTemplate` class that can be used to format chat prompts.
//   const chatPrompt = ChatPromptTemplate.fromPromptMessages([
//     SystemMessagePromptTemplate.fromTemplate(
//       "You are a helpful assistant that translates {input_language} to {output_language}."
//     ),
//     HumanMessagePromptTemplate.fromTemplate("{text}"),
//   ]);

//   //   console.log(chatPrompt.promptMessages);

//   // The result can be formatted as a string using the `format` method.
//   const responseC = await chatPrompt.formatPromptValue({
//     input_language: "English",
//     output_language: "French",
//     text: "I love programming.",
//   });

//   const messages = responseC.toChatMessages();
//   return messages;
// };

// gpt-4
// "gpt-3.5-turbo"
export const runChain = async (
  instructTemplate: string,
  data: string,
  //   modelName: string = "gpt-4"
  modelName: string = "gpt-3.5-turbo"
) => {
  const spinner = new Spinner("Thinking...");
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
  console.log(response.text);
  //   return response;
};

const file = readFile("src/utils/tokens.ts");
runChain(codeReviewInstruction, file);
