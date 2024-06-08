// Question No. 43
// Making Array

let magicianName: string[] = [
  "Herry Porter",
  "Christian Bale",
  "Freddy Borden",
  "Daniel Atlas",
];

// Making function

function showMagician(magiciansName: string[]) {
  magiciansName.forEach((magicians) => {
    console.log(magicians);
  });
}

function makeGreat(magicianName: string[]) {
  return magicianName.map((magician) => `The Great ${magician}`);
}
// Making a copy of Magician Name Array
let copyOfMagician = magicianName.slice();
// Making great each magician from copy array
let greatToEachMagician = makeGreat(copyOfMagician);

// calling funcitons
console.log(`\nModified copy array`);
showMagician(greatToEachMagician); //modified array function
console.log(`\nOriginal Array`);
showMagician(magicianName); // Original function array
