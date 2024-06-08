"use strict";
// Questoin No. 61
// making enum for vehicles
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
})(vehicles || (vehicles = {}));
// making variable for storing enum
const vehicle = vehicles.motorcycles;
// showing one example of vehicle
console.log(vehicle); // output is 02
