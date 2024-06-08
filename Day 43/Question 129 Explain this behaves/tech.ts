// Question No. 129
// Define object for using this behaviour

let myInfo = {
  name: "Huzaifa",
  traditionalFunction: function () {
    console.log(`My name is ${this.name}`);
  },
  arrowFunction: () => {
    console.log(`My name is ${this.name}`);
  },
};

myInfo.traditionalFunction();
myInfo.arrowFunction();

