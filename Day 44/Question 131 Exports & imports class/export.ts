// Question No. 131
// Module 1 for exporting class
// Making class

export class MyInfoClass {
  name: string;
  institute: string;
  constructor(n: string, institute: string) {
    this.name = n;
    this.institute = institute;
  }
  greet() {
    return `My Name is ${this.name} I am a student of PIAIC`;
  }
}
