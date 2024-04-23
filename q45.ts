
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.

function cars_info(company: string, model: string, extra_info: { color: string; tow_package?: boolean; year?: number; optional?: string }) {
    let obj = {
        company,
        model,
        ...extra_info
    }
    return obj

}
console.log(cars_info('subaru', 'outback', { color: 'blue', tow_package: true }))
console.log(cars_info('honda', 'accord', { year: 1991, color: 'white' }))
console.log( cars_info("Ford", "Mustang", { color: "red", year: 2021, optional: "leather seats" }))