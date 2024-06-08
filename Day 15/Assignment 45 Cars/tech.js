"use strict";
// Question No 45
function carInfo(manufacturer, model, ...features) {
    let car = Object.assign({ manufacturer,
        model }, Object.assign({}, ...features));
    return car;
}
console.log(carInfo("Honda", "Civic", { Color: "Silver" }, { Features: ['sunroof', 'navigation', 'power windows'] }));
