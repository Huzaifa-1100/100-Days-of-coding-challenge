"use strict";
// Question 132
// Discuss the difference between default and named exports in JavaScript modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatherName = exports.myNam = void 0;
// Module 1: Default Export
// 1. Module have only one default export
// 2. When importing a default export you can use any name for imported entity
// 3. Default exports are commonly used for one line value, function and class
// Example for default export
var myName = function () { return console.log("My Name Huzaifa"); };
exports.default = myName;
// Module 2: Named Export
// 1. Module have multiple named export
// 2. When importing a named export you must be use specified name in the export statement
// 3. Named exports are used for multiple values function or classes
// Example for named export
exports.myNam = "Huzaifa";
exports.fatherName = "Muhammad Ayub";
