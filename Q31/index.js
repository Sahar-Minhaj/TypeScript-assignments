"use strict";
// Define the list of users' ages (you can modify this array)
const ages = [];
// assign value  like [5] will give some result
// Check if the list of users is not empty
if (ages.length === 0) {
    console.log("We need to find some users!");
}
else {
    const age = ages[0]; // You can change this value or loop through the array to handle multiple users
    if (age < 2) {
        console.log("The person is a baby.");
    }
    else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    }
    else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    }
    else {
        console.log("The person is an elder.");
    }
}
