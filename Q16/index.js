var Guest_list2 = ["Casper", "jhonny depp", "Matt leblanc"];
Guest_list2.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my place. Please let us know if you can join us!"));
});
var busy_guest1 = "Casper";
console.log("Unfortunately,".concat(busy_guest1, " won't make it to the dinner due to halloween"));
var new_guest1 = "scooby dooo";
var cancelled_Guest1 = Guest_list2.indexOf(busy_guest1);
if (cancelled_Guest1 !== -1) {
    Guest_list2[cancelled_Guest1] = new_guest1;
}
Guest_list2.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my place. Please let us know if you can join us!"));
});
// Print that you found a bigger dinner table
console.log("Great news! I've found a bigger dinner table!");
// Add new guests to the list
Guest_list2.unshift("Tom");
Guest_list2.splice(Math.floor(Guest_list2.length / 2), 0, "Angry bird");
Guest_list2.push("Spider man");
console.log("new Guest list ".concat(Guest_list2));
// Print a new set of invitation messages
Guest_list2.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Now that i've got a bigger table you're all invited to for a better experience. let us know if you can join us!"));
});
