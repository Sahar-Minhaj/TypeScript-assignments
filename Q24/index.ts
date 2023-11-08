// Tests for equality and inequality with strings
let textA: string = "hello";
let textB: string = "world";

console.log("Is textA equal to textB? I predict False.");
console.log(textA == textB); // False

console.log("Is textA not equal to textB? I predict True.");
console.log(textA != textB); // True

// Tests using the lower case function
let nameA: string = "Syed";
let nameB: string = "Syed";

console.log("Is nameA equal to nameB (case-sensitive)? I predict False.");
console.log(nameA == nameB); // False

console.log("Is nameA equal to nameB (case-insensitive)? I predict True.");
console.log(nameA.toLowerCase() == nameB.toLowerCase()); // True

// Numerical tests
let numA: number = 10;
let numB: number = 20;

console.log("Is numA less than numB? I predict True.");
console.log(numA < numB); // True

console.log("Is numA greater than or equal to numB? I predict False.");
console.log(numA >= numB); // False

// Tests using "and" and "or" operators
let sunny: boolean = true;
let weekend: boolean = false;

console.log("Is it sunny and the weekend? I predict False.");
console.log(sunny && weekend); // False

console.log("Is it sunny or the weekend? I predict True.");
console.log(sunny || weekend); // True

// Test whether an item is in an array
let fruits1: string[] = ["apple", "banana", "cherry"];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits1.includes("banana")); // True

// Test whether an item is not in an array
console.log("Is 'orange' not in the fruits array? I predict True.");
console.log(!fruits1.includes("orange")); // True
