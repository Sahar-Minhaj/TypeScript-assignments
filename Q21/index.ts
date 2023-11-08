const countries: { name: string; capital: string; population: number }[] = [
    { name: "United States", capital: "Washington, D.C.", population: 331002651 },
    { name: "India", capital: "New Delhi", population: 1380004385 },
    { name: "China", capital: "Beijing", population: 1444216107 },
    { name: "Brazil", capital: "Brasília", population: 212559417 },
    { name: "Russia", capital: "Moscow", population: 145912025 },
];
console.log("List of Countries:");
countries.forEach((country) => {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log("------------");
});
