// Question NO. 137
// creating a functin to implement a try-catch block to handle potential errors
function dividion(num1: number, num2: number) {
  try {
    if (num2 === 0) {
      throw new Error("Youn cannot divide any number by 0");
    } else {
      let result = num1 / num2;
      console.log(`Your Result is ${result}`);
    }
  } catch (error) {
    console.log(`${error}`);
  }
}

dividion(10, 2); // output your resul is 5
dividion(10, 0); // Error: Youn cannot divide any number by 0
