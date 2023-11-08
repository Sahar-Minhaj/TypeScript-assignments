"use strict";
function make_great1(magicians) {
    const greatMagicians1 = [];
    for (const magician of magicians) {
        greatMagicians1.push(`the Great ${magician}`);
    }
    return greatMagicians1;
}
function show_magicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magician_names1 = ["David Copperfield", "Jadugar 420", "Jadugar 007", "Samri jadugar"];
const great_magicians1 = make_great1([...magician_names1]); // Create a copy of the array
console.log("Original Magicians:");
show_magicians1(magician_names1);
console.log("\nGreat Magicians (Separate Array):");
show_magicians1(great_magicians1);
