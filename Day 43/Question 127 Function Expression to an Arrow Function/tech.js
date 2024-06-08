// Question 127
// Convert a traditional function expression to an arrow function.
// Traditional Expression Function
var addition = function (num1, num2) {
    return num1 + num2;
};
// convert into an arrow function
var addNumbers = function (val1, val2) { return val1 + val2; };
// calling both Functions
console.log(addition(4, 6)); //output 10
console.log(addNumbers(6, 4)); // output 10
