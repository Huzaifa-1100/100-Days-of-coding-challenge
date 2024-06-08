// Question No. 84
// : Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript"

let replaceWord = (sentence: string) => {
  return sentence.replace(/Javascript/g, "Typescript")
};
// showing resul
console.log(replaceWord("Javascript is a powerful language and I Love Javascript"));
