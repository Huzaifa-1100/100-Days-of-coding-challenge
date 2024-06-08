// Question No. 113

// Creating Map

let contries = new Map([
  ["Pakistan", "Islamabad"],
  ["Canada", "Ottawa"],
  ["Farance", "Paris"],
]);

// Write a function that check Canada

function findCanada(contries: Map<string, string>) {
  if (contries.has("Canada")) {
    console.log(`Capital of Canada is ${contries.get("Canada")}`);
  } else {
    console.log("Canada is not found in the Map");
  }
}

findCanada(contries);
