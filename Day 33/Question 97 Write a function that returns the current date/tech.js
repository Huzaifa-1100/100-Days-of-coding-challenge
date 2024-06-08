"use strict";
// Question No. 97
// Write a function that returns the current date in the format "DD-MM-YYYY".
function currentDate() {
    let date = new Date();
    return `${date.getDay().toString().padStart(2, "0")}-${(date.getMonth() + 1)
        .toString().padStart(2, "0")}-${date.getFullYear()}`;
}
console.log(currentDate());
