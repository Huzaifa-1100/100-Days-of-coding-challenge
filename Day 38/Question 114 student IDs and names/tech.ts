// Question No. 114
// creating map for storing students data

let studentInfo = new Map <number, string> ();

studentInfo.set(21, "Eric");
studentInfo.set(31, "John");
studentInfo.set(41, "Emily");

studentInfo.forEach((student, id) => {
  console.log(`Student ID is: ${id} Student Name is: ${student}`);
});
