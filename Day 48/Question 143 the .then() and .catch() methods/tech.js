// Question 143
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// creating dynamic Promise to use the .then() and .catch() methods
var dynamicPromise = new Promise(function (resolve, reject) {
    var winner = Math.random();
    // use if condition to make promise dynamic 
    if (winner > 0.5) {
        resolve("Congragulations You Won the Race");
    }
    else {
        reject(new Error("You Loose Better Luck Next Time"));
    }
});
dynamicPromise
    .then(function (win) { return console.log(win); }) // then will handle a winner
    .catch(function (error) { return console.log("".concat(error)); }); // catch will handle a looser
