import { CallbackManager } from "langchain/callbacks";
import { OpenAI } from "langchain/llms/openai";
import dotenv from "dotenv";

dotenv.config();

export const run = async () => {
  // To enable streaming, we pass in `streaming: true` to the LLM constructor.
  // Additionally, we pass in a `CallbackManager` with a handler set up for the `handleLLMNewToken` event.
  const chat = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    maxTokens: 1000,
    streaming: true,
    callbackManager: CallbackManager.fromHandlers({
      async handleLLMNewToken(token: string) {
        process.stdout.write(token);
      },
    }),
  });

  const response = await chat.call("Tell me a long joke.");
  console.log(response);
};

run();
