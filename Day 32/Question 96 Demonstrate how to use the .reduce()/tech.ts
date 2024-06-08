// Question No. 96
// creating array
const numbers: number[] = [2, 4, 6, 8, 10];

//  Write a function that .reduce() method applies a function against an accumulator and each element in the array
let accumulateNumbers = (numbers: number[]) => {
  return numbers.reduce((initialNum: number, currentNum) => initialNum + currentNum, 0);
};
// calling function
console.log(accumulateNumbers(numbers));
