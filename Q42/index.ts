function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magician_names: string[] = ["David Copperfield", "Jadugar 420", "Jadugar 007", "Samri jadugar"];
const great_magicians = make_great(magician_names);

// console.log("\n Magicians:");
// show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
