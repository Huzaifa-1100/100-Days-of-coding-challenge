// Question 139
// List three reserved words in JavaScript and create a valid use case for each

// Use const reserved word to declare variable

const temperature: number = 25;

// Reserved word if statement executes a block of code if a specified condition is true.

if (temperature > 30) {
  console.log("It is warm outside");
} else {
  console.log("It is cool outside"); // output It is cool outside
}

// Reserved word return statement ends function execution and return a value  to  function

function sum(num1: number, num2: number) {
  return num1 + num2;
}

console.log(sum(2, 2)); // output 4
