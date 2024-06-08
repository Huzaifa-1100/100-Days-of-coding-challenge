// Question 132
// Module 1: Default Import
// 1. Curly bracess are not use for importing a default export

console.log("Default Import Export");

import myIntro from "./export";

myIntro(); // output "My name is Huzaifa"

// Module 2: Named Import
// 1. Curly bracess must be used to specify the names of the named exports when importing
// 2. Named exports are used for multiple values function or classes

console.log("\nNamed Import Export");

import { myNam, fatherName } from "./export";

console.log(`My name is ${myNam} and my father name is ${fatherName}`);
