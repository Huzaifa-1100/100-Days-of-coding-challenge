// Question 150:
//  Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous Code Example
console.log("Start"); // Execute First
console.log("Processing..."); // Execute Second
console.log("End"); // Execute Third
// Asynchronous Code Example
console.log("Start"); // Execute First
setTimeout(function () {
    console.log("Processing..."); // Execute Third
}, 2000);
console.log("End"); // Execute Second
