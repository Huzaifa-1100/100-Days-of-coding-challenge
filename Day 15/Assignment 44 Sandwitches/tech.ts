// Question No. 44
// Making array with rest parameter

let make_sandwitch = (...items: string[]) => {
  console.log(`Making a sandwitch with following items:`);
  items.forEach((item) => console.log(item));
  console.log(`Enjoy you sandwitch\n`);
};
// Calling funcitons with three different number of arguments
make_sandwitch(`Chicke`, `Cheese`, `Egg`, `Mayo`);
make_sandwitch(`Tomato Ketchup`, `butter`);
make_sandwitch(`Bread`, `Mozrilla Cheese`);
