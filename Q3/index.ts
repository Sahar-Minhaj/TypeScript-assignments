let pName: string = "sahar";
let lowercase: string = pName.toLowerCase();

let uppercase: string = pName.toUpperCase();

let titleCase: string = pName
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
console.log('Name in lower case:',(lowercase));
console.log('Name in uppper case:',(uppercase));
console.log('Name in title case:',(titleCase));