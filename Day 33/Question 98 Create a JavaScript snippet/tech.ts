// Question No. 98
//  calculates and logs how many days are left until New Year.

let daysLeft = () => {
  let currentDate = new Date();
  // calculates and logs how many days are left until New Year.
  let newYearDays = new Date(currentDate.getFullYear() + 1, 0, 1);
  let differenceInMillionSeconds =
    newYearDays.getTime() - currentDate.getTime();
  // Convert Million Seconds into days
  let millionSecToDays = 1000 * 60 * 60 * 24;
  let daysLeft = Math.ceil(differenceInMillionSeconds / millionSecToDays);
  return daysLeft;
};
console.log(daysLeft());
