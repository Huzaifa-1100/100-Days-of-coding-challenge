"use strict";
// Question No. 16
// guest list
let guests = ["Yaman", "Huzaifa", "Khuzaima"];
console.log("I found a bigger dinner table");
// Adding guests at the begining of the array
guests.unshift("Sara", "Rehana");
// Adding guest at the middle of the array
guests.splice(3, 0, "Nahyan");
// Adding guests at the end of the array
guests.push("Seher Bano");
// Print update list
guests.forEach((guest) => {
    console.log(`Dear ${guest}, would you like to join me for dinner`);
});
