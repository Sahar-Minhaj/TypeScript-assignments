function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities, including one with a non-default country
describe_city("Karachi", "Pakistan");
describe_city("Lahore"); // Uses the default country
describe_city("Dehli", "Bharat");
