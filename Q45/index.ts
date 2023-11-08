function createCar(manufacturer: string, model: string, options: Record<string, any>): Record<string, any> {
    return { manufacturer, model, ...options };
}

const carInfo = createCar("Toyota", "Camry", { color: "Blue", year: 2023, features: ["Navigation", "Sunroof"] });

console.log("Car Information:");
console.log(carInfo);

