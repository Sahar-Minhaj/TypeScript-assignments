//Program 1
//this program changes the name into upper lower and titlecase
var p_Name = "sahar";
var lower_case = p_Name.toLowerCase();
var upper_case = p_Name.toUpperCase();
var title_Case = p_Name
    .split(' ')
    .map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); })
    .join(' ');
console.log(lower_case);
console.log(upper_case);
console.log(title_Case);
//Program 2
// it prints your favorite quote
var famous_Person = 'Muhammad Ali Jinnah';
var f_quote = 'With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.';
var n_Message = "".concat(famous_Person, " once said, \"").concat(f_quote, "\"");
// Print the message
console.log(n_Message);
