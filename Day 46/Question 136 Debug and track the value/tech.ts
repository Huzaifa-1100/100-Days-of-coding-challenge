// Question 136

// Creating array of numbers

let numbers: number[] = [2, 4, 6, 8, 10];

// Initialized a variable to hold running number

let initialNum = 0;

// define a loop

for (let i = 0; i < numbers.length; i++) {
  // Update running total
  initialNum += numbers[i];

  // Use console.log() to debug and track the value of a variable inside a loop
  console.log(
    `Iteration ${i} Current Number ${numbers[i]} Running Total ${initialNum}`
  );
}
