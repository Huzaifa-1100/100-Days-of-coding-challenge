// Question No. 94
// creating array
const social: string[] = ["Facebook", "Linkedin", "Google", "Gmail"];

// usding .map() method to create a new array that contains the length of each word
const socialLength = social.map((social: string) => social.length);

// Print the length of each word
console.log(socialLength);
