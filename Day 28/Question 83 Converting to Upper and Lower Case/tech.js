"use strict";
// Question No. 83
//  Creating a function that takes a string, converts it to uppercase, then to lowercase
let caseOfLetters = (letters) => {
    let upperCase = letters.toUpperCase();
    let lowerCase = letters.toLowerCase();
    console.log(`Upper Case: ${upperCase} \nLower Case: ${lowerCase}`);
};
caseOfLetters("Typescript");
// Showing the length of string of arguement
