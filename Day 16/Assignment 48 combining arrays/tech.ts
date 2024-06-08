// Question 48
// making arrays

let laptopPrice1: number[] = [50000, 40000, 15000];
let laptopPrice2: number[] = [30000, 35000, 18000];

// combinign and sorting arrays

// let combinedPrices = [...laptopPrice1,...laptopPrice2]//.sort(function(a,b){return a-b})
console.log(`combined arrays`);
console.log(...laptopPrice1, ...laptopPrice2);
console.log(`combined and sorted arrays`);
console.log(
  [...laptopPrice1, ...laptopPrice2].sort(function (a, b) {
    return a - b;
  })
);
