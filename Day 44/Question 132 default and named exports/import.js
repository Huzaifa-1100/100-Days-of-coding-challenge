"use strict";
// Question 132
// Module 1: Default Import
// 1. Curly bracess are not use for importing a default export
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Default Import Export");
var export_1 = require("./export");
(0, export_1.default)(); // output "My name is Huzaifa"
// Module 2: Named Import
// 1. Curly bracess must be used to specify the names of the named exports when importing
// 2. Named exports are used for multiple values function or classes
console.log("\nNamed Import Export");
var export_2 = require("./export");
console.log("My name is ".concat(export_2.myNam, " and my father name is ").concat(export_2.fatherName));
