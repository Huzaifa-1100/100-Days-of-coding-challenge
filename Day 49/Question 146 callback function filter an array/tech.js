// Question 146:
// creating an array of numbers.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Define the callback function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}
// use filter methord and pass the test implemented by the provided calback functio
var filteredArray = numbers.filter(isEven);
// Output the filtered array
console.log(filteredArray); // ouput 2 4 6 8 10
