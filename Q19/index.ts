let Guest_list4: string[] = ['Tom','scooby dooo','Angry bird','jhonny depp','Matt leblanc','Spider man']

console.log("I'm sorry, but I can only invite two people for dinner as our table hasn't arrived yet.");

while (Guest_list4.length > 2) {
    let removedGuests = Guest_list4.pop();
    console.log(`Sorry, ${removedGuests}, I can't invite you to dinner this time.`);
  }
  
Guest_list4.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
  });
  
Guest_list4.length = 0;
console.log("My dinner guest list is now empty:", Guest_list4);

console.log("I'm only inviting 2 persons at dinner" );