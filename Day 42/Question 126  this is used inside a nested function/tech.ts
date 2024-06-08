// Question 126

// Explain this keyword changes its value when used inside a nested function within a method.

let myObject = {
  name: "Huzaifa",
  outerFunction: function () {
    console.log(this.name);
    //Nested Function
    let innerFunction = () => {
      console.log(this.name);
    };
    innerFunction();
  },
};

myObject.outerFunction();
