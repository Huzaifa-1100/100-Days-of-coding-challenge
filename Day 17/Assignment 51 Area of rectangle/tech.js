"use strict";
// Question 51
// Making a simple function
function areaOfRectangle(length, width) {
    return length * width;
}
// Refactoring to Arrow Functions
let refacAreaOfRectangle = (length, width) => length * width;
// calling function
console.log(refacAreaOfRectangle(3, 10));
