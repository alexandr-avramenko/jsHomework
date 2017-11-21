//----------------------- TASK #1 -----------------------
function isPal(string) {
    if (typeof string !== 'string') {
         String(string).trim();
     }
    var initArr = removeSpaces(string),
        revArray = initArr.slice(0).reverse();
    if (initArr.join() === revArray.join()) {
        return true;
    } else {
        return false;
    }
}

/*
this function removes spaces if they existed from array
and make all symbols in lower case
*/
function removeSpaces(str) {
    var arr = str.toLowerCase().split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

//----------------------- TASK #2 -----------------------
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log(anClean(arr));

function anClean(arr) {
    var obj = {},
        result = [];

    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join();
        obj[sorted] = arr[i];
    }

    for (var key in obj) {
        result.push(obj[key]);
    }
    return result;
}

//----------------------- TASK #3 -----------------------
var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ],
    result = arr.map(function(item) {
        return item.split('').reverse().join('');
    });
console.log(result);

//----------------------- TASK #4 -----------------------
console.log('Sum for integer numbers: ' + getIntSum(1, 100));
console.log('Sum for even numbers: ' + getEvenSum(0, 100));


function getEvenSum(start, end) {
    var sum = 0;

    for (start; start <= end; start++) {
        if ( start % 2 === 0) {
            sum += start;
        }
    }
    return sum;
}

function getIntSum(start, end) {
    var sum = 0;

    for (start; start <= end; start++) {
        sum += start;
    }
    return sum;
}

//----------------------- TASK #5 -----------------------
callMe(1, "sdgs", 'f'); // error
callMe(4, 10, 15); // 29

function callMe(n1, n2, n3) {
    var nums = makeArray(arguments),
        i;

    if (isNum(n1) && isNum(n2) && isNum(n3)) {
        return n1 + n2 + n3;
    } else {
        var message = "Wrong elements are: ";
            for(i = 0; i < nums.length; i++){
                message += nums[i] + " ";
            }
        console.error(message);
        return null;
    }
}

// making array from arguments
function makeArray(args) {
    var arr = [],
        i;

    for (i = 0; i < args.length; i++) {
        if(!isNum(args[i])){
            arr.push(i);
        }
    }
    return arr;
}
// check numbers
function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

//----------------------- TASK #6 -----------------------
var abc = ['g', 'v', 'a', 'f', 'i'];
function callMeAgain(arr) {
    return arr.sort().join(',').split(' ');
}
callMeAgain(abc); // ["a,f,g,i,v"]

//----------------------- TASK #7 -----------------------
var list = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
],
    sorted = list.sort(sortByAge);

console.log(sorted);

// sorting by age
function sortByAge(a, b) {
    return a.age - b.age;
}
//----------------------- TASK #8 -----------------------
var name = prompt('Your name?', ''),
    age = +prompt('Your age?', '');

addToList(name, age);

function addToList(name, age) {
    var result;
    if (isNameExist(list, name) === true) {
        list.push({name: name, age: age});
        list.sort(sortByAge);
        result = list;
    } else {
        result = alert("Such user already exists. Please choose another name.");
    }
    return result;
}

function isNameExist(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        var result;
        arr[i].name !== name ? result = true : result = false;
    }
    return result;
}

//----------------------- TASK #9 -----------------------
