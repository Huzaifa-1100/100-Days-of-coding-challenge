// Question No. 88
// Write a function that takes a decimal number as input and returns the number rounded to the nearest integer
let inputNumbers = (num: number): number => {
  return Math.round(num);
};
console.log(`rounding decimals to the closest number to Up`);

console.log(inputNumbers(10.5222));

console.log(`rounding decimals to the closest number to down`);

console.log(inputNumbers(10.4222));
