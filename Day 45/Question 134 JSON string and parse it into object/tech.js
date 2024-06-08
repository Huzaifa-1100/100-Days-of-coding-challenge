// Question 134 Take a JSON string and parse it into a JavaScript object.
// Creatng JavaScript Object
var studentInfo = {
    name: "Emily",
    gender: "Female",
    course: "TypeScript",
    institute: "PIAIC",
};
// Taking JSON string from object
var jsonString = JSON.stringify(studentInfo);
console.log(jsonString); // output object into string
// convert JSON string into parse
var parse = JSON.parse(jsonString);
console.log(parse); // output parse JSON Stirnt into  JavaScript Object
