"use strict";
// Question 106
// Determine if a given year is a leap year using comparison operators.
Object.defineProperty(exports, "__esModule", { value: true });
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024)); // is leap year
console.log(isLeapYear(2022)); // is not a leap year
