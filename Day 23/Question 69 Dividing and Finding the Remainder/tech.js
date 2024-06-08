"use strict";
// Question No. 69
// Writing a function that dividing &  teh reminder
let divAndRemin = (val1, val2) => {
    let quotient = Math.floor(val1 / val2);
    let reminder = val1 % val2;
    return { quotient, reminder };
};
// calling function for showing results
console.log(divAndRemin(20, 6));
