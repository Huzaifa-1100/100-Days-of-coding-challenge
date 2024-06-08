"use strict";
// Question No. 92
// creating array
const array = ["Eric", "Jack", "John"];
// Write a function to remove the last element from an array
function removeLastElem(param) {
    // return the removed element from array using .pop method
    return param.pop();
}
// calling function
console.log(removeLastElem(array));
console.log(array);
