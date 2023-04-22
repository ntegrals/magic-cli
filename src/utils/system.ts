import fs from "fs";
import chalk from "chalk";
import { runCompleteChain } from "../langchain/chain";

// Read in file
export const readFile = (filePath: string) => {
  const data = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
  return data;
};

// Write to file
export const writeFile = (filePath: string, data: string) => {
  fs.writeFileSync(filePath, data, {
    encoding: "utf8",
  });
  console.log();
  console.log(chalk.green(`Output was written to ${filePath}`));
};

// only as a file input
export const defaultOption = async (
  options: any,
  commandName: string,
  instruction: string,
  model: string
) => {
  let silent;
  if (options.silent) {
    silent = true;
  }

  if (options[commandName]) {
    // only relevant for options that require at least two arguments

    const inputFilePath =
      typeof options[commandName] === "string" ? options[commandName] : "";

    const data = await runCompleteChain(
      inputFilePath,
      instruction,
      "Dreaming of electric sheep...",
      silent,
      model
    );
    if (data && options.output) {
      const outputFilePath =
        typeof options.output === "string" ? options.output : "output.txt";

      writeFile(outputFilePath, data);
    }
  }
};

// has a file input and one more argument
export const multiOption = async (
  options: any,
  commandName: string,
  instruction: string,
  model: string
) => {
  let silent;
  if (options.silent) {
    silent = true;
  }

  if (options[commandName]) {
    // only relevant for options that require at least two arguments
    if (options[commandName].length < 2) {
      console.log(
        chalk.red(
          "Error parsing arguments please provide them in this format: -t src/test.js jest"
        )
      );
      return;
    }
    const inputFilePath =
      typeof options[commandName][0] === "string"
        ? options[commandName][0]
        : "";
    const replacement =
      typeof options[commandName][1] === "string"
        ? options[commandName][1]
        : "";

    const data = await runCompleteChain(
      inputFilePath,
      instruction.replace("{replace}", replacement),
      "Dreaming of electric sheep...",
      silent,
      model
    );
    // checks if the data is not null
    // writes to a file by default
    if (data && options.output) {
      const outputFilePath =
        typeof options.output === "string" ? options.output : "output.txt";

      writeFile(outputFilePath, data);
    }
  }
};
