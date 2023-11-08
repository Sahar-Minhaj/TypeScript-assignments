"use strict";
let number = 5;
console.log("Is number == 5? I predict True.");
console.log(number == 5); // True
console.log("Is number === '5'? I predict False.");
console.log(number === 5); // False
let x = 10;
let y = 20;
console.log("Is x < y? I predict True.");
console.log(x < y); // True
console.log("Is x > y? I predict False.");
console.log(x > y); // False
let isSunny = true;
let isRainy = false;
console.log("Is it sunny and not rainy? I predict True.");
console.log(isSunny && !isRainy); // True
let fruit = 'apple';
console.log("Is fruit equal to 'banana' or 'cherry'? I predict False.");
console.log(fruit === 'banana' || fruit === 'cherry'); // False
let age = 18;
console.log("Is age less than 21 and not equal to 18? I predict False.");
console.log(age < 21 && age !== 18); // False
console.log("Is age greater than or equal to 18? I predict True.");
console.log(age >= 18); // True
let hasPermission = true;
let isLoggedIn = false;
console.log("Is the user logged in and has permission? I predict False.");
console.log(isLoggedIn && hasPermission); // False
console.log("Is either the user logged in or has permission? I predict True.");
console.log(isLoggedIn || hasPermission); // True
