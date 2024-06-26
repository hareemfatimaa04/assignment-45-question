// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.
//method 1
function city_country(city,country){
    return `${city} , ${country}`
}
console.log(city_country("Karachi","Pakistan"))
console.log(city_country("Lahore","Pakistan"))
console.log(city_country("Multan","Pakistan"))

//method 2
function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo');