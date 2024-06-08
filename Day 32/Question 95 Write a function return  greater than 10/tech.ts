// Question No. 95
// creating array
const numbers: number[] = [3, 6, 9, 12, 15, 18];

//  Write a function that uses the .filter() method to return an array of numbers greater than 10
let numGreater10 = (numbers: number[]) => {
  return numbers.filter((num: number) => num > 10);
};
// calling function
console.log(numGreater10(numbers));
