// Question Node. 77
// Creating a function that greets user

let greetsUser = (user: string = "anonymous") => {
  console.log(`Hello ${user}`);
};
// calling function
greetsUser();
greetsUser(`Eric`);
