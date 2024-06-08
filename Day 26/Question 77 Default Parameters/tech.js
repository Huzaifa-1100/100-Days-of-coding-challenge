"use strict";
// Question Node. 77
// Creating a function that greets user
let greetsUser = (user = "anonymous") => {
    console.log(`Hello ${user}`);
};
// calling function
greetsUser();
greetsUser(`Eric`);
