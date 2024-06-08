var personName = "Yaman";
// lower case: shows the name in all small letters
console.log("lower case:", personName.toLocaleLowerCase());
// UPPER CASE: shows the name in all capital letters
console.log("UPPER CASE:", personName.toUpperCase());
//Title Case: Shows the name with first word capital
console.log("Title Case:", personName.charAt(0).toUpperCase() + personName.slice(1).toLocaleLowerCase());
