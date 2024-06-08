"use strict";
// Question No. 131
// Module 1 for exporting class
// Making class
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoClass = void 0;
var MyInfoClass = /** @class */ (function () {
    function MyInfoClass(n, institute) {
        this.name = n;
        this.institute = institute;
    }
    MyInfoClass.prototype.greet = function () {
        return "My Name is ".concat(this.name, " I am a student of PIAIC");
    };
    return MyInfoClass;
}());
exports.MyInfoClass = MyInfoClass;
