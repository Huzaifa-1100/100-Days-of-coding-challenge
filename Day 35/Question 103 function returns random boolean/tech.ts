// Question 103

// Question 103 Write a function that returns a random boolean.

let boolean = (): boolean => {
  // use Math.random() and check if it's above or below 0.5 to
  return Math.random() >= 0.5;
};
// calling function to show the result
console.log(boolean());
