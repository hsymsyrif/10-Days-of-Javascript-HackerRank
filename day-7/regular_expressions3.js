"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function regexVar() {
  /*
   * The regular expression must:
   * - Match all occurrences of numbers in a string
   * - Use the global flag 'g' to find multiple matches
   */
  const re = /\d+/g;

  return re;
}

function main() {
  const re = regexVar();
  const s = readLine();

  const r = s.match(re);

  for (const e of r) {
    console.log(e);
  }
}
