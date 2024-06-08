// Question 53

// Making Object of Programmer's Skill
let programmerSkill = {
  codingLanguages: ["Typescript", "Javascript", "Python"],
  tools: ["VS Code", "Git", "Docker"],
  framework: ["NodeJS", "Angular", "React"],
};

// getting specific pieces of information
let { codingLanguages, tools, framework } = programmerSkill;

// print the specific part from each list

console.log(
  `Language: ${codingLanguages[1]} \nTools: ${tools[0]} \nFramework: ${framework[0]}`
);
