import fs from "fs";
import path from "path";

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
};

// Delete file

// const test = readFile("src/test.ts");

// writeFile("src/test3.ts", test);
