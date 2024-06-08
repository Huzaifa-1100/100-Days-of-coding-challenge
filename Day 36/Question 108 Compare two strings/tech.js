// Question 108
// Compare two strings to check if they are identical, ignoring case sensitivity.
var compareTwoStrings = function (string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase();
};
console.log(compareTwoStrings("huzaifa", "Huzaifa")); //Output true
console.log(compareTwoStrings("huzaifa", "huzafa")); // Output false
