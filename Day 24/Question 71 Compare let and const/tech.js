"use strict";
// Question No. 71
// Create a examples let that allows reassignment
let myFriend = "Eric";
console.log(`Printing Original value of Let Variable:\n${myFriend}`); //output Eric
// Reassign the value of variable
myFriend = "Jack";
console.log(`Printing Reassignable value:\n${myFriend}`); // output Jack
// Create a examples let that allows reassignment
const myName = "Huzaifa"; // output Huzaifa
console.log(`\nPrinting Original value of const Variable:\n${myName}`);
// Trying to reaaign the value of const variable
try {
    myName = "Asad"; //it shows error
}
catch (error) {
    console.log("Error:", error);
}
