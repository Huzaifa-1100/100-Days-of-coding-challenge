"use strict";
// Question No. 30
// Making array
let users = ["Eric", "Tom", "Admin", "Jack"];
// Loop through usernames to personalize greetings
for (let i = 0; i < users.length; i++) {
    if (users[i] === "Admin") {
        console.log(`\nHello Admin! I m so grateful to work with you. `);
    }
    else
        console.log(`\nWelcome ${users[i]}! Get ready for some amazing deals and updates right here.`);
}
