// Question No. 18

// Making array
let places: string[] = ["Paris", "Switzerland", "White House", "Kashmir", "Gilgit Baltistan"];

// Arrays ordered and reordered in various ways without altering the original list

// Original Order
console.log(`Original Order: ` + places );

// Alphabetical Ordered
console.log(`\nAlphabetical Ordered: ` + [...places].sort());
console.log(`Original Order: ` + places)

// Alphabetical Reverse Ordered

console.log(`\nAlphabetical Reverse: ` + [...places].sort().reverse());
console.log(`Original Ordered: ` +places);

