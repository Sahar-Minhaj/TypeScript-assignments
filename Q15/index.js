var Guest_list1 = ["Casper", "jhonny depp", "Matt leblanc"];
Guest_list1.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my place. Please let us know if you can join us!"));
});
var busy_guest = "Casper";
console.log("Unfortunately,".concat(busy_guest, " won't make it to the dinner due to halloween"));
var new_guest = "scooby dooo";
var cancelled_Guest = Guest_list1.indexOf(busy_guest);
if (cancelled_Guest !== -1) {
    Guest_list1[cancelled_Guest] = new_guest;
}
Guest_list1.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my place. Please let us know if you can join us!"));
});
