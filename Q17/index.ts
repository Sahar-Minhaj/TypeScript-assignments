let Guest_list3: string[] = ['Tom','scooby dooo','Angry bird','jhonny depp','Matt leblanc','Spider man']

console.log("I'm sorry, but I can only invite two people for dinner as our table hasn't arrived yet.");

while (Guest_list3.length > 2) {
    const removedGuest = Guest_list3.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner this time.`);
  }
  
Guest_list3.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
  });
  
Guest_list3.length = 0;
console.log("My dinner guest list is now empty:", Guest_list3);
