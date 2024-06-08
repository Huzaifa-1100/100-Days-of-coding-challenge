// Question No. 80
// Start with car object

let car: { make: string; model: string; year: number; [key: string]: any } = {
  make: "Honda",
  model: "Civic",
  year: 2024,
};

// Adding a property named color to the existing car object
car.color = "Silver";

// update the year property to 2021.
car.year = 2021;

// Show perform above operations
console.log(car);
