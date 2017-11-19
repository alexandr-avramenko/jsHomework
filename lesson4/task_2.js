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