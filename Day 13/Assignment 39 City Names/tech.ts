// Question NO. 39
// making function

let cityCountry = (city: string, country: string) => {
  return city + country;
};

// // Call the function to format different city-country pairs
let pair1 = cityCountry("Islamabad ", "Pakistan");
let pair2 = cityCountry("Karachi ", "Pakistan");
let pair3 = cityCountry("Tokyo ", "Japan");

console.log(`${pair1} \n${pair2}\n${pair3}`);
