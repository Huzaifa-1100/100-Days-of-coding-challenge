// Question 142
// Create a Promise that resolves with Hello, World! after 2 seconds.

// Creating a Promise

let myPromise = new Promise((resolve, reject) => {
  console.log("Promise will take 2 seconds to print");
  // set timeout to resolves with "Hello, World!" after 2 seconds.
  setTimeout(() => {
    resolve("Hello World"); // print after 2 seconds
  }, 2000);
});

myPromise.then((greet) => console.log(greet)); //output Hello, World!" after 2 seconds

