const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the names of the animals
console.log("List of animals:");

for (const animal of animals) {
    console.log(animal);
}

// Modify the loop to print statements about each animal
console.log("\nStatements about each animal:");

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
