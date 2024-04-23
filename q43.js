// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var magiciansNames = ["Ejaz Mughal", "M Yaseen", "AS Jilani", "Shamsher Razzaque", "Abid Khakwani"];
function showmagicians(magicians) {
    console.log("Magicians:");
    magicians.forEach(function (magician, index) {
        console.log("".concat(index + 1, ". ").concat(magician));
    });
}
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "".concat(magician, " the Great"); });
    return greatMagicians;
    RTCDTMFSender;
}
var greatMagicianNames = makeGreat(magiciansNames);
showmagicians(greatMagicianNames);
