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
   * - Start with a vowel: `^([aeiou])`
   * - End with the same vowel: `\1$` (backreference to the first captured vowel)
   */
  const re = /^([aeiou]).*\1$/;

  return re;
}

function main() {
  const re = regexVar();
  const s = readLine();

  console.log(re.test(s));
}
