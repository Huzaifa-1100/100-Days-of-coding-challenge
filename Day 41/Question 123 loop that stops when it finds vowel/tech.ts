// Question 123:
// Create a loop that iterates through a string and stops when it finds the first vowel.

let findVowel = (string: string) => {
  let vowel: string = "aeiouAEIOU";
  for (let char of string) {
    if (vowel.includes(char)) {
      console.log(`First vowel found "${char}"`);
      break;
    }
  }
};

findVowel("typescript");
