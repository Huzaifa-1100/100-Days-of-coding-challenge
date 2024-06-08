// Question NO. 41
// Making array

let magiciansName: string[] = [
  "Herry Porter",
  "Christian Bale",
  "Freddy Borden",
  "Daniel Atlas",
];

// making function
function showMagician(magiciansName: string[]) {
  magiciansName.forEach((magician) => console.log(magician));
}

// calling function
showMagician(magiciansName);
