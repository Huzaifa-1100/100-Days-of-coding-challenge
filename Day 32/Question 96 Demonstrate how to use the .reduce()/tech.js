"use strict";
// Question No. 96
// creating array
const numbers = [2, 4, 6, 8, 10];
//  Write a function that .reduce() method applies a function against an accumulator and each element in the array
let accumulateNumbers = (numbers) => {
    return numbers.reduce((initialNum, currentNum) => initialNum + currentNum, 0);
};
// calling function
console.log(accumulateNumbers(numbers));
