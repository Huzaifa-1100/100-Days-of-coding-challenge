// Question No. 115
// Making Function to log the day of the week based on a number (1-7)
function logDay(weekDays) {
    // Using Switsch statemets to log the week day
    switch (weekDays) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}
logDay(1); // Output Sunday
logDay(5); // Output Friday
