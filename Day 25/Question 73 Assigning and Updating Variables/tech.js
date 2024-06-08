"use strict";
// Question No. 73
// Create a function where you declare a variable using let
// and assign an initial value. Then, update its value within the same function
let assignAndUpdate = () => {
    let myFriend = "Eric"; // Assign the initial value of a variable
    console.log(`Print the initial value: `, myFriend);
    myFriend = "John"; // Reassigning the value of variable
    console.log(`Print the Updated value: ${myFriend}`);
};
assignAndUpdate();
