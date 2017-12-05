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

console.log(result.sort());

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
//----------------------- TASK #8(7) -----------------------
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
var numbers = [13, 35, 3, 443],
    whatNum = +prompt('What number do you want to count?', '');

//returns quantity of specific numbers (n) in the array (arr) are present
function numsCounter(arr, n) {
    var convert = arr.join(',').split(''),
        counter = 0;

    convert.forEach(function (item) {
        if (n == item) {
            counter++;
        }
    });

    return counter;
}

console.log('The array contains ' + numsCounter(numbers, whatNum) + ` digits ${whatNum}`); // 4 digits 3

//----------------------- TASK #10 -----------------------
var arr = ['1', '2', '3', '4', '5', '6'];

function makeString(arr) {
    var result = [],
        i;

    for (i = 0; i < (arr.length / 2); i++) {
        result.push(arr[i] + arr[arr.length - i - 1]);
    }

    return result.join('-');
}
makeString(arr);

//----------------------- TASK #11 -----------------------
var first = [1, 2, 3],
    second = [4, 5, 6];

function sumArray(arr1, arr2) {
    var result = [];
    console.log(arguments.length);
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] === undefined || arr2[i] === undefined) {
            return result;
        } else {
            result.push(arr1[i] + arr2[i]);
        }
    }
    return result;
}
sumArray(first, second); // [5, 7, 9]

//----------------------- TASK #12 -----------------------
var arr = [1,2,3,4,3,3],
    ask = +prompt('Which digit do you want to delete?', "");

function deleteElement(arr, val) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

deleteElement(arr, ask); // [1, 2, 4]

//----------------------- TASK #13 -----------------------
var arr1 = [1, 2, 3],
    arr2 = [101, 2, 1, 10],
    arr3 = [2, 1];

intersection(arr1, arr2, arr3); // [1, 2]


function compareArr(arr1, arr2) {
    var result = [],
        i,
        j;
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && result.indexOf(arr1[i]) === -1) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}

function intersection() {
    var result = arguments[0];

    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return result;
    }
    for (var i = 1; i < arguments.length; i++) {
        result = compareArr(result, arguments[i]);
    }

    return result;
}

//----------------------- TASK #14 -----------------------
var nums = [2, 3, 1, 4];

digitsDuplication(nums); // [ 2, 2, 3, 3, 3, 1, 4, 4, 4, 4 ]

function digitsDuplication(arr) {
        var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i]; j > 0; j--) {
            result.push(arr[i]);
        }
    }
    return result;
}

//----------------------- TASK #15 -----------------------
var arr = [1,2,3],
    quantity = +prompt("How many '0' do you want to add?",'');

addZero(arr, quantity);

function addZero(arr, quantity) {
    for (var i = 0; i < quantity; i++) {
        arr.push(0);
    }
    return arr;
}

//----------------------- TASK #16 -----------------------

//--------- PART #1

var arr = [8, 8, 3, 0, 2, -1, 2, 2, 3, 4, 4, 6, 2, 5, -1, -4, 2, 1, 25, 1, -1, -1, 0];

minNums(arr); // [-4, -1, 0]

function minNums(arr) {
   var result = arr.reduce(function (total, current) {
        if ( total.indexOf(current) === -1 ) {
            total.push(current);
        }
        return total;
    }, []);

    result.sort(function compareElems (a, b) {
        return a - b;
    });

    return result.splice(0, 3);
}

//--------- PART #2

negativeNums(arr); // [-1, -1, -4]

function negativeNums(arr) {

    var result = arr.filter(function (num) {
        return num < 0;
    });

    return result.slice(0, 3);
}