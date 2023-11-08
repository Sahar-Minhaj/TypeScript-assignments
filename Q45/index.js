"use strict";
function createCar(manufacturer, model, options) {
    return Object.assign({ manufacturer, model }, options);
}
const carInfo = createCar("Toyota", "Camry", { color: "Blue", year: 2023, features: ["Navigation", "Sunroof"] });
console.log("Car Information:");
console.log(carInfo);
