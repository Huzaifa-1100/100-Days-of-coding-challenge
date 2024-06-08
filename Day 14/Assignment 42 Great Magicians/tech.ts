// Question No. 42
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
  return magicianName.map(magician => `The Great ${magician}`)
}

// calling funcitons

showMagician(makeGreat(magicianName)); //modified array function
showMagician(magicianName); // Original function array
