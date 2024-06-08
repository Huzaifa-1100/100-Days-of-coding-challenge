"use strict";
// Question 56
// Making list of mixed items
let mixedItems = [1, "Apple", 2, "Potato", 3, true, 4, "Mangoes", 5];
// Array contaning only strings
let strintItems = mixedItems.filter((item) => typeof item === "string");
// Print the string array
console.log(`Showing Original Array `, mixedItems);
console.log(`Showing only String from original array `, strintItems);
