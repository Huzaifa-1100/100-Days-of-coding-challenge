"use strict";
// Question No. 38
// making array
let describingCities = (city, country = "China") => {
    console.log(`${city} is in ${country}`);
};
describingCities("Beijing");
describingCities("Shanghai");
describingCities("Whuhan");
describingCities("Tokyo", "Japan");
describingCities("Karachi", "Pakistan");
describingCities("Murree", "Pakistan");
