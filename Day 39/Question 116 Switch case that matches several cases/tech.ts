// Question No. 116

// Function that log season

function logSeason(months: number) {
  switch (months) {
    case 12: // December
    case 1: // January
    case 2: // February
      console.log("Winter");
      break;
    case 3: // March
    case 4: // April
    case 5: // May
      console.log("Spring");
      break;
    case 6: // June
    case 7: // July
    case 8: // August
      console.log("Summer");
      break;
    case 9: // September
    case 10: // October
    case 11: // November
      console.log("Autumn/Fall");
      break;
    default:
      console.log("Invalid Month");
  }
}

logSeason(3) // Output Spring
