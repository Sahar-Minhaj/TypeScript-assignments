const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'Supreme'];

// Print the names of your favorite pizzas
console.log("My favorite pizzas are:");

for (const pizza of favoritePizzas) {
    console.log(pizza);
}

// Modify the loop to print sentences about each pizza
console.log("\nI like these pizzas:");

for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a statement about how much you like pizza
console.log("\nI really love pizza!");
