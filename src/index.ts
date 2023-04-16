#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import fs from "fs";
import chalk from "chalk";
import { runCompleteChain } from "./langchain/chain";
import { writeFile } from "./utils/system";
import { join } from "path";
import * as prompts from "./langchain/prompts";

const main = async () => {
  const program = new Command();

  program
    .version("1.0.0", "-v, --version", "output the current version")
    .description("Brings the power of GPT-4 to your terminal")
    .option("-r, --review  [filePath]", "code review for a file")
    .option("-i, --improve  [filePath]", "refactor the code")
    .option("-b, --best  [filePath]", "convert the code to the best practices")
    .option("-f, --fix [filePath]", "fix the code recursively")
    .option("-l, --lang [filePath]", "convert the code to a different language")
    .option("-e, --eli5 [filePath]", "explain the code in simple terms")
    .option("-t, --test [filePath]", "generate unit tests for the code")
    .option("-d, --document [filePath]", "generate documentation for the code")
    .option("-x, --arbitrary [filePath]", "accepts any instruction")
    .option("-o, --output [filePath]", "the output file path")
    .option(
      "-a, --addkey [apiKey]",
      "add your OpenAI API key to the the environment"
    )
    .option(
      "-d, --deletekey",
      "delete your OpenAI API key from the environment"
    )
    .option("-p, --printkey", "print your OpenAI API key")
    .parse(process.argv);

  const options = program.opts();

  // default, when no options are passed
  if (!process.argv.slice(2).length) {
    console.log(figlet.textSync("Magic CLI"));
    program.outputHelp();
  }

  // default output = output.txt
  // or you can specify a specifc output file
  let filePath = join(process.cwd(), "output.txt");

  if (options.output) {
    filePath = typeof options.output === "string" ? options.output : filePath;
  }

  // Options for API Key
  if (options.addkey) {
    const key = typeof options.addkey === "string" ? options.addkey : "";

    if (key) {
      fs.writeFileSync(".env", `OPENAI_API_KEY=${key}`);
      console.log(chalk.green("You have successfully added your API key"));
    } else {
      console.log(chalk.red("Please enter a valid API key"));
    }
  } else if (options.deletekey) {
    fs.writeFileSync(".env", "");
    console.log(chalk.green("You have successfully deleted your API key"));
  } else if (options.printkey) {
    const data = fs.readFileSync(".env", { encoding: "utf8" });

    if (data) {
      console.log(chalk.blue(data));
    } else {
      console.log(chalk.red("You have not added your API key"));
    }
  } else if (options.review) {
    const filepath = typeof options.review === "string" ? options.review : "";
    const data = await runCompleteChain(
      filepath,
      prompts.codeReviewInstruction,
      "Reviewing code..."
    );
    // checks if the data is not null and the output option is passed
    if (data && options.output) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
  } else if (options.improve) {
    const filepath = typeof options.improve === "string" ? options.improve : "";
    const data = await runCompleteChain(
      filepath,
      prompts.refactorInstruction,
      "Refactoring code..."
    );
    // checks if the data is not null
    // writes to a file by default
    if (data) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
  } else if (options.best) {
    const filepath = typeof options.best === "string" ? options.best : "";
    const data = await runCompleteChain(
      filepath,
      prompts.bestPracticesInstruction,
      "Make sure the code follows best practices..."
    );
    // checks if the data is not null
    // writes to a file by default
    if (data) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
    // } else if (options.fix) {
    //   const filepath = typeof options.fix === "string" ? options.fix : "";
    // conductCodeReview(filepath);
  } else if (options.lang) {
    const filepath = typeof options.lang === "string" ? options.lang : "";
    const data = await runCompleteChain(
      filepath,
      prompts.convertLanguageInstruction,
      "Converting Language..."
    );
    // checks if the data is not null
    // writes to a file by default
    if (data) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
  } else if (options.eli5) {
    const filepath = typeof options.eli5 === "string" ? options.eli5 : "";
    const data = await runCompleteChain(
      filepath,
      prompts.eli5Instruction,
      "Generating ELI5..."
    );
    // checks if the data is not null and the output option is passed
    if (data && options.output) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
  } else if (options.test) {
    const filepath = typeof options.test === "string" ? options.test : "";
    const data = await runCompleteChain(
      filepath,
      prompts.testsInstruction,
      "Generating unit tests..."
    );
    // checks if the data is not null
    // writes to a file by default
    if (data) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
  } else if (options.document) {
    const filepath =
      typeof options.document === "string" ? options.document : "";
    const data = await runCompleteChain(
      filepath,
      prompts.documentationInstruction,
      "Documenting code..."
    );
    // checks if the data is not null
    // writes to a file by default
    if (data) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
  } else if (options.arbitrary) {
    const filepath =
      typeof options.arbitrary === "string" ? options.arbitrary : "";
    const data = await runCompleteChain(
      filepath,
      prompts.arbitraryInstruction,
      "Running arbitrary instruction..."
    );
    // checks if the data is not null
    // writes to a file by default
    if (data) {
      writeFile(filePath, data);
    } else {
      console.log(chalk.red("Error writing to output file"));
    }
  }
};

main();
