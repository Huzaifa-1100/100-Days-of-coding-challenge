"use strict";
// Question 55
// Making Array
let listOfNumbers = [1, 2, 3, 4, 5];
/* use a map method to go through each number in our list
 and make a new list with each number doubled.*/
let doubleNumbers = listOfNumbers.map((num) => {
    return num * 2;
});
// Print the original Array Numbers
console.log(`Original Array Numbers: `, listOfNumbers);
// Print the double numbers
console.log(`Double Array Numbers: `, doubleNumbers);
