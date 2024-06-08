// Question 136
// Creating array of numbers
var numbers = [2, 4, 6, 8, 10];
// Initialized a variable to hold running number
var initialNum = 0;
// define a loop
for (var i = 0; i < numbers.length; i++) {
    // Update running total
    initialNum += numbers[i];
    // Use console.log() to debug and track the value of a variable inside a loop
    console.log("Iteration ".concat(i, " Current Number ").concat(numbers[i], " Running Total ").concat(initialNum));
}
