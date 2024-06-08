// Question No. 129
// Define object for using this behaviour
var _this = this;
var myInfo = {
    name: "Huzaifa",
    traditionalFunction: function () {
        console.log("My name is ".concat(this.name));
    },
    arrowFunction: function () {
        console.log("My name is ".concat(_this.name));
    },
};
myInfo.traditionalFunction();
myInfo.arrowFunction();
