"use strict";
const age1 = 40; // You can change this value to test different age groups
if (age1 < 2) {
    console.log("The person is a baby.");
}
else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler.");
}
else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid.");
}
else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager.");
}
else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
