// Utils to execute code
import { exec } from "node:child_process";
import util from "util";

const execPromise = util.promisify(exec);
// Execute arbitrary file
// const program = "ts-node";
// const filePath = "src/test3.ts";

// Execute arbitrary file
export const executeFile = async (filePath: string, interpreter: string) => {
  try {
    const { stdout } = await execPromise(`${interpreter} ${filePath}`);
    return { type: "stdout", output: stdout };
  } catch (error: any) {
    // error.status;  // Might be 127 in your example.
    // error.message; // Holds the message you typically want.
    error.stderr; // Holds the stderr output. Use `.toString()`.
    // error.stdout;  // Holds the stdout output. Use `.toString()`.
    return { type: "stderr", output: error.stderr.toString() };
  }
};
