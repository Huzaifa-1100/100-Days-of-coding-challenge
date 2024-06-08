"use strict";
// Question 49
// making function with rest parameters
let arrayHobbies = (...hobbies) => {
    hobbies.forEach((hobby) => {
        console.log(`I enjoy ${hobby}`);
    });
};
// calling function with multiple arguments``
arrayHobbies("coding", "typing", "learning");
