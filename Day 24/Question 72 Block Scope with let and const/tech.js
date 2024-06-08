"use strict";
// Question No. 72
// Demonstrate block scope by creating a code block with {}
{
    let myAge = 28;
    const myName = "Huzaifa";
}
// Showing how variables declared inside the block are not accessible outside of it
console.log(myAge);
console.log(myName);
