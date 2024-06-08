function dividion(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Youn cannot divide any number by 0");
        }
        else {
            var result = num1 / num2;
            console.log("Your Result is ".concat(result));
        }
    }
    catch (error) {
        console.log("".concat(error));
    }
}
dividion(10, 2);
dividion(10, 0);
