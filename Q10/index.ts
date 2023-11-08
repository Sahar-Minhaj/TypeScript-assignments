//Program 1
//this program changes the name into upper lower and titlecase

let p_Name: string = "sahar";
let lower_case: string = p_Name.toLowerCase();

let upper_case: string = p_Name.toUpperCase();

let title_Case: string = p_Name
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
console.log(lower_case);
console.log(upper_case);
console.log(title_Case);

//Program 2
// it prints your favorite quote
let famous_Person: string = 'Muhammad Ali Jinnah';

let f_quote: string = 'With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.';
let n_Message: string = `${famous_Person} once said, "${f_quote}"`;

// Print the message
console.log(n_Message);