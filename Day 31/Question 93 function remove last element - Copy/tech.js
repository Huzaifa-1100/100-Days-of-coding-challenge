"use strict";
// Question No. 93
// creating array
const fruits = ["Apple", "Orange", "Banana", "Graps"];
// Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceFruit(fruits) {
    const banana = fruits.indexOf("Banana");
    if (banana !== -1) {
        fruits[banana] = "Mango";
    }
    return fruits;
}
console.log(replaceFruit(fruits));
