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

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: 0! and 1! are both 1
  }
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}

function main() {
  const n = +readLine();

  console.log(factorial(n));
}
