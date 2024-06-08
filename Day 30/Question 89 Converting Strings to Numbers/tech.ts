// Question No. 89
// Create a function that takes a string representing a number 

let stringToNumbers = (str1: string, str2: string): number => {
// converting and performing mathematical operation on it
  return parseInt(str1) + parseFloat(str2);
};

console.log(stringToNumbers("4", "4.2")); // output 8.2
