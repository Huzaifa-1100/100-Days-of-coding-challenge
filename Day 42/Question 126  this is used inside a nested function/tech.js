// Question 126  
// Explain this keyword changes its value when used inside a nested function within a method.
var myObject = {
    name: "Huzaifa",
    outerFunction: function () {
        var _this = this;
        console.log(this.name);
        //Nested Function
        var innerFunction = function () {
            console.log(_this.name);
        };
        innerFunction();
    }
};
myObject.outerFunction();
