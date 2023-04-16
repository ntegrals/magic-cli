// Utils to execute code
import { exec } from "node:child_process";

// Execute arbitrary file
// const program = "ts-node";
// const filePath = "src/test3.ts";

// Execute arbitrary file
export const executeFile = (program: string, filePath: string) => {
  exec(`${program} ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return err;
    }
    console.log(stdout);
    return stdout;
  });
};
