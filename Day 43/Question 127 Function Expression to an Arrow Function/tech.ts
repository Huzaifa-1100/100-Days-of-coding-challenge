// Question 127
// Convert a traditional function expression to an arrow function.

// Traditional Expression Function

let addition = function (num1: number, num2: number) {
  return num1 + num2;
};

// convert into an arrow function

let addNumbers = (val1:number, val2) => val1 + val2

// calling both Functions

console.log(addition(4,6)); //output 10
console.log(addNumbers(6,4)); // output 10
