// Question NO. 117

// writing a function that make a building have 3 floors

function makeBuilding(floor: number) {
  switch (floor) {
    case 0:
      console.log(`You are on the Ground Floor`);
      break;
    case 1:
      console.log(`You are on the first Floor`);
      break;
    case 2:
      console.log(`You are on the Second Floor`);
      break;
    case 3:
      console.log(`You are on the Third Floor`);
      break;
    default:
      console.log(`Invalid Floor "The Floor is under construction"`);
  }
}

makeBuilding(1); //Output "Your are on the first floor"
makeBuilding(4); //Output "Invalid floor"
