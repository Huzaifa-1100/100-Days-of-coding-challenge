// Question No. 114
// creating map for storing students data
var studentInfo = new Map();
studentInfo.set(21, "Eric");
studentInfo.set(31, "John");
studentInfo.set(41, "Emily");
studentInfo.forEach(function (student, id) {
    console.log("Student ID is: ".concat(id, " Student Name is: ").concat(student));
});
