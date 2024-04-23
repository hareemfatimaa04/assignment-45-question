// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


let magicianNames: string[] = ["Ejaz Mughal", "M Yaseen", "AS Jilani", "Shamsher Razzaque", "Abid Khakwani"];

function showMagicians(magicians: string[]): void {
    console.log("Magicians:");

    magicians.forEach((magician, index) => {
        console.log(`${index + 1}. ${magician}`);
        })
}
showMagicians(magicianNames);