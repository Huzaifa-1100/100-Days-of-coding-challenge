// Question 57

// Making list of grades

let listOfGrade = [50, 60, 80, 33];

// sum of array of grade
let sumOfGrades = listOfGrade.reduce((total, list) => total + list, 0);

// finding average

let average = sumOfGrades / listOfGrade.length;

// Print the original grades array
console.log(`Showing the original grades `, listOfGrade);
// Print the average grade of that array
console.log(`\nShowing the average grade `, average);
