"use strict";
// Question No. 81
//  Write a function that takes an object as an argument and logs all of its properties and values
function objProperties(obj) {
    // using a for...in loop to examine or display all the information an object hold
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
objProperties({ make: "Honda", model: "Audi", year: 2020 });
