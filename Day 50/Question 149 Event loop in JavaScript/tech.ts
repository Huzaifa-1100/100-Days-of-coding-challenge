// Question 149
// Explain the concept of the event loop in JavaScript step by step with an example.

// Step 1 synchronous code logs "Start" to the console

console.log("Start");

setTimeout(() => {
  // Step 4: Asynchronous callback logs "Callback from SetTimeout" after 2 seconds
  console.log("Callback from SetTimeout");
}, 2000);

// Step 2: synchronous code logs "End" to the console

console.log("End");

// Step 3: After 2 seconds, the event loop moves the callback from the queue to the callstack
