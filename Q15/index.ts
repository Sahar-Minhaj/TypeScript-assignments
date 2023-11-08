let Guest_list1: string[] = ["Casper", "jhonny depp", "Matt leblanc"];


Guest_list1.forEach(guest => {
  console.log(`Dear ${guest}, you are cordially invited to a dinner party at my place. Please let us know if you can join us!`);
});

let busy_guest:string = "Casper"
console.log(`Unfortunately,${busy_guest} won't make it to the dinner due to halloween`);


let new_guest:string = "scooby dooo";
let cancelled_Guest = Guest_list1.indexOf(busy_guest)

if (cancelled_Guest !== -1) {
    Guest_list1[cancelled_Guest] = new_guest;
  }
  
Guest_list1.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to a dinner party at my place. Please let us know if you can join us!`);
  });
  
  