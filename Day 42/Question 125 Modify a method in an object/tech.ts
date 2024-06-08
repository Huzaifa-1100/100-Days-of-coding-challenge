// Question 125
// Define Object havin multiple properties

let myObject = {
  name: "Huzaifa",
  fName: "Ayub",
  age: 28,
  // Modify a method in an object
  getProperties: function () {
    // leverage this keyword to interact multiple properties within same object
    return `${this.name} ${this.fName}`;
  },
};

console.log(myObject.getProperties());
