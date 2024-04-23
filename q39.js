// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Multan", "Pakistan"));
function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo');
