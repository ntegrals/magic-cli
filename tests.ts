```
import { CallbackManager } from "langchain/callbacks";
import { OpenAI } from "langchain/llms/openai";
import dotenv from "dotenv";

dotenv.config();

describe("OpenAI", () => {
  let chat: OpenAI;

  beforeAll(() => {
    chat = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      maxTokens: 1000,
      streaming: true,
      callbackManager: CallbackManager.fromHandlers({
        async handleLLMNewToken(token: string) {
          process.stdout.write(token);
        },
      }),
    });
  });

  describe("call", () => {
    it("should return a response for a valid input", async () => {
      const response = await chat.call("Tell me a long joke.");
      expect(response).toBeDefined();
    });

    it("should throw an error for an invalid input", async () => {
      await expect(chat.call("")).rejects.toThrow();
    });
  });

  describe("stream", () => {
    it("should stream tokens for a valid input", async () => {
      const callbackManager = CallbackManager.fromHandlers({
        async handleLLMNewToken(token: string) {
          expect(token).toBeDefined();
        },
      });
      await chat.stream("Tell me a long joke.", callbackManager);
    });

    it("should throw an error for an invalid input", async () => {
      const callbackManager = CallbackManager.fromHandlers({
        async handleLLMNewToken(token: string) {
          expect(token).toBeDefined();
        },
      });
      await expect(chat.stream("", callbackManager)).rejects.toThrow();
    });
  });
});
```