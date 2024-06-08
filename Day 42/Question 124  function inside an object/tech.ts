// Question 124:

// Define Object

let myObject = {
  name: "Huzaifa",
  fName: "Muhammad Ayub",
  //function inside an object
  getName: function () {
    // returns the object's own name property using the this keyword.
    return this.name;
  },
};

console.log(myObject.getName());
