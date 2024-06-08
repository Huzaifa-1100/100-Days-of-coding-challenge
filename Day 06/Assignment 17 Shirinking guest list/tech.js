"use strict";
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.
// Start Exercise:
// guest list
let guests = ["Yaman", "Huzaifa", "Khuzaima", "Eric"];
let unableToAttend = ["Khuzaima", "Eric"];
unableToAttend.forEach((unableToAttend) => {
    console.log(`Unfortunately, ${unableToAttend} won’t arrive in time.`);
});
// Removing guests from the array
guests.splice(2, 2);
// Print update list
guests.forEach((guest) => {
    console.log(`Dear ${guest}, would you like to join me for dinner`);
});
