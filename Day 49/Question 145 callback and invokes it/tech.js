// Question 145:
// Create a function that accepts a callback
function greet(callback, name, fName) {
    callback(name, fName);
}
function myCallback(a, b) {
    console.log("Welcome ".concat(a, " ").concat(b));
}
greet(myCallback, "Huzaifa", "Ayub");
