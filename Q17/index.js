var Guest_list3 = ['Tom', 'scooby dooo', 'Angry bird', 'jhonny depp', 'Matt leblanc', 'Spider man'];
console.log("I'm sorry, but I can only invite two people for dinner as our table hasn't arrived yet.");
while (Guest_list3.length > 2) {
    var removedGuest = Guest_list3.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner this time."));
}
Guest_list3.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to the dinner."));
});
Guest_list3.length = 0;
console.log("My dinner guest list is now empty:", Guest_list3);
