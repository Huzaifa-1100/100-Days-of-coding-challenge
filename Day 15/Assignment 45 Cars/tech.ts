// Question No 45
function carInfo (manufacturer:string, model: string, ...features:{[key:string]:any}[]):object {
  let car = {
    manufacturer,
    model,
    ...Object.assign({}, ...features)
  }
  return car
} 

console.log(carInfo("Honda", "Civic", {Color: "Silver"}, {Features: ['sunroof', 'navigation', 'power windows' ]}))