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
   * - Start with one of the specified titles: `Mr.|Mrs.|Ms.|Dr.|Er.`
   * - Be followed by one or more alphabetic characters: `[a-zA-Z]+`
   */
  const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;

  return re;
}

function main() {
  const re = regexVar();
  const s = readLine();

  console.log(!!s.match(re));
}
