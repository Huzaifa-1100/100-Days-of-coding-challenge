// Question 105

// Simulate a dice roll using JavaScript and return a random integer between 1 and 6

let dice = () => {
// Generate Ramdom Integer between 1 to 6
  let randomInteger = Math.floor((Math.random() *6) +1)
  return randomInteger
  
}
// Calling fuction to show hex number color code
console.log(dice());
