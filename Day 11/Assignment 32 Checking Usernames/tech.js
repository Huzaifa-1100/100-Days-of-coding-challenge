"use strict";
// Question No. 32
let current_users = ["john", "Lilly", "Jack", "Herry", "jimmy"];
let new_users = ["Lilly", "marina", "Herry", "Diana", "michel"];
new_users.forEach(new_users => {
    if (current_users.some(current_users => current_users.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need to enter a new username.`);
    }
    else {
        console.log(`${new_users} is available.`);
    }
});
