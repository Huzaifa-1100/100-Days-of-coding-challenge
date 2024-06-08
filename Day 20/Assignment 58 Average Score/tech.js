"use strict";
// Question 58
// WWriting a program that can store lots of score
let averageScore = (...scores) => {
    let sumOfScore = scores.reduce((total, score) => total + score, 0);
    return sumOfScore / scores.length;
};
// callin average funcxtion
console.log(averageScore(60, 90, 100, 80, 30));
