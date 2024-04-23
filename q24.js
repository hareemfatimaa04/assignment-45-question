// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var L_variable_1 = "Karachi";
var L_variable_2 = "Pakistan";
var L_variable_3 = "Karachi";
console.log('L_variable_1 == L_variable_2 ', L_variable_1 == L_variable_2);
console.log("L_variable_1 != L_variable_2 ", L_variable_1 != L_variable_2);
console.log("L_variable_1 == L_variable_3 ", L_variable_1 == L_variable_3);
console.log("L_variable_1 != L_variable_3 ", L_variable_1 != L_variable_3);
console.log("Working on Lower condation");
L_variable_1 = "Karachi";
L_variable_2 = "Karachi";
console.log("L_variable_1.toLowerCase == L_variable_2.toLowerCase ", L_variable_1.toLowerCase == L_variable_2.toLowerCase);
console.log("L_variable_1.toLowerCase != L_variable_2.toLowerCase ", L_variable_1.toLowerCase != L_variable_2.toLowerCase);
console.log("Working on Number condation");
var L_NUMBER_1 = 5;
var L_NUMBER_2 = 10;
var L_NUMBER_3 = 5;
console.log("L_NUMBER_1 == L_NUMBER_2 ", L_NUMBER_1 == L_NUMBER_2);
console.log("L_NUMBER_1 != L_NUMBER_2 ", L_NUMBER_1 != L_NUMBER_2);
console.log("L_NUMBER_1 < L_NUMBER_2 ", L_NUMBER_1 < L_NUMBER_2);
console.log("L_NUMBER_1 > L_NUMBER_2 ", L_NUMBER_1 > L_NUMBER_2);
console.log("L_NUMBER_1 <= L_NUMBER_2 ", L_NUMBER_1 <= L_NUMBER_2);
console.log("L_NUMBER_1 >= L_NUMBER_2 ", L_NUMBER_1 >= L_NUMBER_2);
console.log("L_NUMBER_1 == L_NUMBER_3 ", L_NUMBER_1 == L_NUMBER_3);
console.log("L_NUMBER_1 != L_NUMBER_3 ", L_NUMBER_1 != L_NUMBER_3);
console.log("Working on AND & OR OPERATOR condation");
var a = true;
var b = false;
console.log("a && b", a && b);
console.log("a || b", a || b);
console.log("Test whether an item is in a array");
var l_array = [1, 2, 3, 4, 5];
var l_item_1 = 3;
var l_item_2 = 8;
console.log(l_item_1 in l_array);
console.log(l_item_2 in l_array);
console.log("Test whether an item is not in a array");
var l_array_2 = [1, 2, 3, 4, 5];
var l_item = 7;
console.log("l_array_2.indexOf(l_item) == -1  ", l_array_2.indexOf(l_item) == -1);
console.log("l_array_2.indexOf(l_item) !== -1 ", l_array_2.indexOf(l_item) !== -1);
console.log("!l_array_2.includes(l_item)  ", !l_array_2.includes(l_item));
