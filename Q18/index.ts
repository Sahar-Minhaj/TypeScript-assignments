const placesToVisit: string[] = ["Turkey", "Bali", "Thiland", "Rome", "New York"];

console.log("Original Order:", placesToVisit);

let alphabetical_order = [...placesToVisit].sort();
console.log("Alphabetical Order:", alphabetical_order);

console.log("Original Order:", placesToVisit);

let reverse_alpha = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverse_alpha);

console.log("Original Order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();
console.log("Original Order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted Alphabetical Order:", placesToVisit);
