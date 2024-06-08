// Question 108
// Compare two strings to check if they are identical, ignoring case sensitivity.

let compareTwoStrings = (string1:string, string2:string):boolean => {
    return string1.toLowerCase() === string2.toLowerCase()
}

console.log(compareTwoStrings("huzaifa", "Huzaifa")); //Output true
console.log(compareTwoStrings("huzaifa", "huzafa"));  // Output false

