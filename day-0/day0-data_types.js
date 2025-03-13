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

/**
 *   The function performs three operations: sum, sum with decimal, and concatenation.
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";

  // Convert secondInteger to a number and print the sum with firstInteger.
  console.log(firstInteger + Number(secondInteger));

  // Convert secondDecimal to a number and print the sum with firstDecimal.
  console.log(firstDecimal + Number(secondDecimal));

  // Concatenate firstString with secondString and print the result.
  console.log(firstString + secondString);
}

function main() {
  const secondInteger = readLine();
  const secondDecimal = readLine();
  const secondString = readLine();

  performOperation(secondInteger, secondDecimal, secondString);
}
