import { readFile } from "../utils/system";
import { runChain } from "./chain";
import * as prompts from "./prompts";
import chalk from "chalk";

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

export const conductCodeReview = async (filePath: string) => {
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
  const output = await runChain(
    prompts.codeReviewInstruction,
    file,
    "Reviewing code..."
  );
  console.log(output.text);
  return output.text;
};

export const refactor = async (filePath: string) => {
  let file;
  try {
    file = readFile(filePath);
  } catch (error) {
    console.log(chalk.red("Could not read file: " + '"' + filePath + '"'));
    return;
  }
  const output = await runChain(
    prompts.refactorInstruction,
    file,
    "Refactoring code..."
  );
  console.log(output.text);
  return output.text;
};

// Requires file output
// export const fixCodeRecursively = async (input: string) => {};
// Requires file output

// Done
export const eli5 = async (filePath: string) => {
  let file;
  try {
    file = readFile(filePath);
  } catch (error) {
    console.log(chalk.red("Could not read file: " + '"' + filePath + '"'));
    return;
  }
  const output = await runChain(
    prompts.eli5Instruction,
    file,
    "Generating ELI5..."
  );
  console.log(output.text);
  return output.text;
};

export const generateTests = async (filePath: string) => {
  let file;
  try {
    file = readFile(filePath);
  } catch (error) {
    console.log(chalk.red("Could not read file: " + '"' + filePath + '"'));
    return;
  }
  const output = await runChain(
    prompts.testsInstruction,
    file,
    "Generating unit tests..."
  );
  console.log(output.text);
  return output.text;
};

export const convertLanguage = async (
  filePath: string,
  language: string = "TypeScript"
) => {
  let file;
  try {
    file = readFile(filePath);
  } catch (error) {
    console.log(chalk.red("Could not read file: " + '"' + filePath + '"'));
    return;
  }
  const output = await runChain(
    prompts.convertLanguageInstruction.replace("{language}", language),
    file,
    "Converting Language..."
  );
  console.log(output.text);
  return output.text;
};

export const addDocumentation = async (filePath: string) => {
  let file;
  try {
    file = readFile(filePath);
  } catch (error) {
    console.log(chalk.red("Could not read file: " + '"' + filePath + '"'));
    return;
  }
  const output = await runChain(
    prompts.documentationInstruction,
    file,
    "Adding documentation..."
  );
  console.log(output.text);
  return output.text;
};
export const bestPractices = async (filePath: string) => {
  let file;
  try {
    file = readFile(filePath);
  } catch (error) {
    console.log(chalk.red("Could not read file: " + '"' + filePath + '"'));
    return;
  }
  const output = await runChain(
    prompts.bestPracticesInstruction,
    file,
    "Make sure the code follows best practices..."
  );
  console.log(output.text);
  return output.text;
};
