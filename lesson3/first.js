//TASK #1
var a = +prompt("Enter a number", '0');
if (a === 0) {
    console.log("Right")
} else {
    console.log("Wrong");
}
/*
1 - 'Wrong'
0 - 'Right'
-3 - 'Wrong'
 */

//TASK #2
var x = 'test';
if (x === 'test') {
    console.log("Right");
} else {
    console.log('Wrong');
}
/*
'test' - 'Right'
'тест' - 'Wrong'
3 - 'Wrong'
 */

//TASK #3
// variant_1
var test = 1;
if (test == true) {
    console.log("Right");
} else {
    console.log("Wrong");
}
// variant_2
test == true ? console.log("Right") : console.log("Wrong");
/*
true - 'Right'
false - 'Wrong'
 */
