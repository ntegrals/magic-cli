// OR...
import { exec, spawn } from "node:child_process";

// Execute node file
// exec("node src/test3.js", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return err;
//   }
//   return stdout;
// });

// // Execute node file
// exec("python3 src/test.py", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return err;
//   }
//   return stdout;
// });
// // Execute node file
// exec("python3 src/test.py", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return err;
//   }
//   return stdout;
// });

// Execute arbitrary file
const program = "ts-node";
const file = "src/test3.ts";
exec(`${program} ${file}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return err;
  }
  console.log(stdout);
  return stdout;
});

// // Script with spaces in the filename:
// const bat = spawn('"my script.cmd"', ["a", "b"], { shell: true });
// // or:
// exec('"my script.cmd" a b', (err, stdout, stderr) => {
//   // ...
// });
