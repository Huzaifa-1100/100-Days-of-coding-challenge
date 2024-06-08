"use strict";
// Question No. 113
// Creating Map
let contries = new Map([
    ["Pakistan", "Islamabad"],
    ["Canada", "Ottawa"],
    ["Farance", "Paris"],
]);
// let contries = new Map <string, string> ()
// contries.set("Pakistan", "Islamabad")
// contries.set("Farance", "Paris")
// contries.set("Canada", "Ottawa")
// Write a function that check Canada
function findCanada(contries) {
    if (contries.has("Canada")) {
        console.log(`Capital of Canada is ${contries.get("Canada")}`);
    }
    else {
        console.log("Canada is not found in the Map");
    }
}
findCanada(contries);
