// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestArray: string[] = ["Haniya", "Hina", "hunain", "Shahnaz"];
guestArray.map(function (items) { return console.log("Hello,".concat(items, " You are invited to dinner")); });