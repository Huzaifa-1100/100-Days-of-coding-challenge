// Question 148
// Demonstrate the use of the setTimeout() function to execute code after a delay.

// using setTimeout() to log a message after 3 seconds

setTimeout(() => {
  console.log("Hello World");
  // Set a delay of 2000 miliseconds (3 seconds)
}, 2000); // output hello world (after a delay of 2 seconds)

// Example with parameter
// Function to be executed after a delay
function greet(name: string) {
  console.log(`Hello ${name}`);
}
// Set a delay of 3000 miliseconds (3 seconds)
setTimeout(greet, 3000, "Eric"); // output Hellow Eric (after a delay of 3 seconds)
