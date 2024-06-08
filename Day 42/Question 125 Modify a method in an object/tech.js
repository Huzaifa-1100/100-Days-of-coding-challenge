// Question 125
// Define Object havin multiple properties
var myObject = {
    name: "Huzaifa",
    fName: "Ayub",
    age: 28,
    // Modify a method in an object
    getProperties: function () {
        // leverage this keyword to interact multiple properties within same object
        return "".concat(this.name, " ").concat(this.fName);
    },
};
console.log(myObject.getProperties());
