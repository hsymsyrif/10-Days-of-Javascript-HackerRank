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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    // Try reversing the string using split, reverse, and join
    let reversed = s.split("").reverse().join("");
    console.log(reversed);
  } catch (error) {
    // Print the error message if an exception occurs
    console.log(error.message);
    console.log(s); // Print the original value
  }
}

function main() {
  const s = eval(readLine());

  reverseString(s);
}
