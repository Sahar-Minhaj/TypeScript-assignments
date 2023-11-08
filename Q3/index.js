var pName = "sahar";
var lowercase = pName.toLowerCase();
var uppercase = pName.toUpperCase();
var titleCase = pName
    .split(' ')
    .map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); })
    .join(' ');
console.log('Name in lower case:', (lowercase));
console.log('Name in uppper case:', (uppercase));
console.log('Name in title case:', (titleCase));
