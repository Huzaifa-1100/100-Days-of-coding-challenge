// Question 145:
// Create a function that accepts a callback

function greet(callback: (a: string, b: string) => void, name: string, fName: string) {
  // Invoke the callback with the provided arguments
  callback(name, fName);
}
// Define a callback function
function myCallback(a:string, b:string) {
  console.log(`Welcome ${a} ${b}`);
}

greet(myCallback, "Huzaifa", "Ayub")