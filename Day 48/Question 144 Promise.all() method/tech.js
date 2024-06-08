// Question 144
// Explain the use of the Promise.all() method with an example.
// creating multiple promisses
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First Promise Resolved");
        resolve("10");
    }, 1000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Second Promise Resolved");
        resolve("20");
    }, 2000);
});
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Third Promise Resolved");
        resolve("30");
    }, 3000);
});
// Promise resolves when all of the Promises in the iterable have resolved
// It is rejected if any of the passed Promises are rejected
// This method is useful for aggregating the results of multiple promises.
Promise.all([p1, p2, p3])
    .then(function (result) { return console.log("Result: ".concat(result)); })
    .catch(function (error) { return console.log("Error ".concat(error, "}")); });
