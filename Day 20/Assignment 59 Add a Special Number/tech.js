"use strict";
// Question 59
// WWriting a program that can added a specific number
let makeAdder = (specificNum) => {
    let addValue = specificNum.reduce((total, num) => total + num, 5);
    return addValue;
};
// callin funcxtion for adding different number into a specific numbers
console.log(makeAdder([10]));
