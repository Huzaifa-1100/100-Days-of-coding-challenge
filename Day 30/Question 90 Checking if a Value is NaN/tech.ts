// Question No. 90
// Create a function that takes a string representing a number

let checkValueNaN = (value: any) => {
  return isNaN(value);
};

console.log(checkValueNaN("Hello Eric")); // output ture
console.log(checkValueNaN("1100" || 1100)); // output false
