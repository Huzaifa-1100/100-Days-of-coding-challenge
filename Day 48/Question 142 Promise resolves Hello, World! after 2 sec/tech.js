// Question 142
// Create a Promise that resolves with Hello, World! after 2 seconds.
// Creating a Promise
var myPromise = new Promise(function (resolve, reject) {
    console.log("Promise will take 2 seconds to print");
    // set timeout to resolves with "Hello, World!" after 2 seconds.
    setTimeout(function () {
        resolve("Hello World"); // print after 2 seconds
    }, 2000);
});
myPromise.then(function (greet) { return console.log(greet); }); //output Hello, World!" after 2 seconds
