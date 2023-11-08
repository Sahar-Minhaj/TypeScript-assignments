"use strict";
const fruits = ["apple", "banana", "cherry"];
// Intentionally accessing an out-of-bounds index to produce an error
const indexWithError = 3;
console.log(fruits[indexWithError]); // This line will produce an "index out of range" error
// Correcting the error by accessing a valid index
const validIndex = 1;
console.log(fruits[validIndex]); // This line will not produce an error
