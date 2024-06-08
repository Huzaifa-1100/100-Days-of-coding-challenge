// Question 135
// Explain how we can format a JSON string with proper indentation for readability.

// Creating JavaScript Object

let studentInfo = {
  name: "Eric",
  gender: "Male",
  course: "TypeScript",
  institute: "PIAIC",
};

// convert JS object into JSON string with indention
let jsonString = JSON.stringify(studentInfo, null, 3);

// log for result
console.log(jsonString);
