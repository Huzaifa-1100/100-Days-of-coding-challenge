// Question No. 110
//  function that assigns a grade (A, B, C, D, F) based on a student's score

function assignGrade(studentScore: number): number {
  if (studentScore >= 70 && studentScore <= 100) {
    console.log(`Your grade is "A"`);
  } else if (studentScore < 70 && studentScore >= 60) {
    console.log(`Your grade is "B"`);
  } else if (studentScore < 60 && studentScore >= 50) {
    console.log(`Your grade is "C"`);
  } else if (studentScore < 50 && studentScore >= 33) {
    console.log(`Yuur grade is "D"`);
  } else if (studentScore < 33) {
    console.log(`Your Grade is "F"`);
  } else {
    console.log(`Invalid Score`);
  }
  return studentScore;
}
assignGrade(70);
