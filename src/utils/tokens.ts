// Utility functions for counting the tokens

import { get_encoding, encoding_for_model } from "@dqbd/tiktoken";

export const getTokenCountFromMessages = (
  messages: any[],
  model: any = "gpt-3.5-turbo-0301"
): number => {
  let encoding;

  try {
    encoding = encoding_for_model(model);
  } catch (e) {
    console.log("Warning: model not found. Using cl100k_base encoding.");
    encoding = get_encoding("cl100k_base");
  }

  if (model === "gpt-3.5-turbo") {
    console.log(
      "Warning: gpt-3.5-turbo may change over time. Returning num tokens assuming gpt-3.5-turbo-0301."
    );
    return getTokenCountFromMessages(messages, "gpt-3.5-turbo-0301");
  }

  let tokensPerMessage: number;
  let tokensPerName: number;

  switch (model) {
    case "gpt-3.5-turbo-0301":
      tokensPerMessage = 4;
      tokensPerName = -1;
      break;
    case "gpt-4":
      console.log(
        "Warning: gpt-4 may change over time. Returning num tokens assuming gpt-4-0314."
      );
      return getTokenCountFromMessages(messages, "gpt-4-0314");
    case "gpt-4-0314":
      tokensPerMessage = 3;
      tokensPerName = 1;
      break;
    default:
      throw new Error(
        `numTokensFromMessages() is not implemented for model ${model}. See https://github.com/openai/openai-python/blob/main/chatml.md for information on how messages are converted to tokens.`
      );
  }

  let numTokens = 0;

  for (const message of messages) {
    numTokens += tokensPerMessage;

    for (const key in message) {
      const value = message[key];
      numTokens += encoding.encode(value).length;

      if (key === "name") {
        numTokens += tokensPerName;
      }
    }
  }

  numTokens += 3; // every reply is primed with assistant
  console.log(numTokens);
  return numTokens;
};

// getTokenCountFromMessages([{ role: "user", content: "Hello, world!" }]);
