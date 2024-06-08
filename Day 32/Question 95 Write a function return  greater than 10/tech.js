"use strict";
// Question No. 95
// creating array
const numbers = [3, 6, 9, 12, 15, 18];
//  Write a function that uses the .filter() method to return an array of numbers greater than 10
let numGreater10 = (numbers) => {
    return numbers.filter((num) => num > 10);
};
console.log(numGreater10(numbers));
