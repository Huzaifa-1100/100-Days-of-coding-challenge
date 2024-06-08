// Question No. 62
// Making Interface/ blueprint/ template

interface Student {
  name: string
  age: number
  classes: string []
}

// making object with the help of interface/ blueprint
const student1: Student = {
  name: "Emily",
  age: 16,
  classes: ["Computer Science", "Islamiyat", "English"]
}

// print students information storing in object with the help of interface/ blueprint
console.log(student1);
