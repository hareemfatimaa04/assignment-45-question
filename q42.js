// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
var magicianNames = ["Ejaz Mughal", "M Yaseen", "AS Jilani", "Shamsher Razzaque", "Abid Khakwani"];
function showMagicians(magicians) {
    console.log("Magicians:");
    magicians.forEach(function (magician, index) {
        console.log("".concat(index + 1, ". ").concat(magician));
    });
}
showMagicians(magicianNames);
