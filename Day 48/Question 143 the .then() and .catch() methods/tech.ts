// Question 143
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// creating dynamic Promise to use the .then() and .catch() methods

let dynamicPromise = new Promise((resolve, reject) => {
  let winner = Math.random();
  // use if condition to make promise dynamic 
  if (winner > 0.5) {
    resolve("Congragulations You Won the Race");
  } else {
    reject(new Error("You Loose Better Luck Next Time"));
  }
});

dynamicPromise
  .then((win) => console.log(win)) // (then) will handle a winner
  .catch((error) => console.log(`${error}`)); // (catch) will handle a looser
