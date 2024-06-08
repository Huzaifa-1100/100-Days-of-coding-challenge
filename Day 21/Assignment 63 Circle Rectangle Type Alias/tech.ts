// Quesiton No. 63
// Making type Alias

type ShapeProperties = {
  kind: "circle" | "rectangle";
  radius?: number;
  height?: number;
  width?: number;
};

// writing a program to defice circle

const circle: ShapeProperties = {
  kind: "circle",
  radius: 10,
};

// writing a program to define a rectangle

const rectangle: ShapeProperties = {
  kind: "rectangle",
  height: 10,
  width: 20,
};

// showing results
console.log(circle);
console.log(rectangle);
