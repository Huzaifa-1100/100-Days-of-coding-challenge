// Question No . 24
// Making some variables

let a: number = 10;
let b: number = 15;
let y: any = 25;
let z: any = "25";
let myName: string = `john`;
let cars = ["civic", "city", "fortuner"];

//  More Conditional Tests

// testing with lowercase
console.log("test with lowercase");
console.log("JOHN".toLowerCase() == "john"); // true
console.log("John".toLowerCase() != "john"); //false

// testing with &&
console.log("\nTesting with && operators");
console.log(a >= 5 && a <= 15); //true
console.log(b <= 10 && b <= 20); // false

// testing with || OR
console.log("\nTesting with || OR operators");
console.log(a >= 20 || a <= 15); //true
console.log(b <= 10 || b <= a); // false

// testing an item in array
console.log("\nTesting with an item in array");
console.log(cars.includes("fortuner")); //true
console.log(!cars.includes("fortuner")); //false

//testing with > < (greater than and less than)
console.log("\nTesting with > < operators");
console.log(a < b); //true
console.log(a > b); //false
