"use strict";
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magician_names = ["David Copperfield", "Jadugar 420", "Jadugar 007", "Samri jadugar"];
const great_magicians = make_great(magician_names);
// console.log("\n Magicians:");
// show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
