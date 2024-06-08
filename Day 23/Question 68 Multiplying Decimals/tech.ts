// Question No. 68
// Writing a function that multiplying decimals

let decimalsMultiplication = (val1: number, val2: number) => {
  return Math.floor(val1 * val2 * 100) / 100;
};

// calling function for showing results

console.log(decimalsMultiplication(0.2, 0.6));
