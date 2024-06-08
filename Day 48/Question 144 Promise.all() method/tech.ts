// Question 144
// Explain the use of the Promise.all() method with an example.

// creating multiple promisses

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise Resolved");
    resolve("10");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise Resolved");
    resolve("20");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third Promise Resolved");
    resolve("30");
  }, 3000);
});
// Promise resolves when all of the Promises in the iterable have resolved
// It is rejected if any of the passed Promises are rejected
// This method is useful for aggregating the results of multiple promises.
Promise.all([p1, p2, p3])
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.log(`Error ${error}}`));
