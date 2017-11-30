//----------------------- TASK #1 -----------------------
var str = 'aaa@bbb@ccc',
    arr = str.split('@').join('!');

console.log(arr); // "aaa!bbb!ccc"

//----------------------- TASK #2 -----------------------
var s = 'aaa bbb ccc',
    subStr = s.substr(0, 3) + s.substring(7),
    subString = s.substring(0, 3) + s.substring(7),
    slice = s.slice(0, 4) + s.slice(-3);

console.log(subStr); // 'aaa ccc'
console.log(subString); // 'aaa ccc'
console.log(slice); // 'aaa ccc'

//----------------------- TASK #3 -----------------------
var date = '2025-12-31',
    newDate = date.split('-').reverse().join('/');

console.log(newDate); // 31/12/2025

//----------------------- TASK #4 -----------------------
var lang = 'js',
    up = lang.toUpperCase();

console.log(up); // 'JS'

//----------------------- TASK #5 -----------------------
var str = 'я учу javascript!',
    length = str.length;

console.log(length); // 17

//----------------------- TASK #6 -----------------------
var longStr = "This is very long string ever",
    shortStr = "Short string";

function cutLength(str, n) {
    var result;

    if (str.length > +n) {
        result = str.slice(0, n) + '...';
    } else {
        result = str;
    }

    return result;
}

cutLength(longStr, 15); // "This is very lo..."
cutLength(shortStr, 15); // "Short string"

//----------------------- TASK #7 -----------------------
var str = 'я учу javascript!',
    arr = str.split(' ');

console.log(arr); // ["я", "учу", "javascript!"]

//----------------------- TASK #8 -----------------------
var arr = ['я', 'учу', 'javascript', '!'],
    str = arr.join('+');

console.log(str); // 'я+учу+javascript+!'

//----------------------- TASK #9 -----------------------
var str = "строка";

upChar(str); // 'Строка'

function upChar(str) {
    var newStr = str[0].toUpperCase() + str.slice(1);

    return newStr;
}

//----------------------- TASK #10 -----------------------
var str = 'я учу javascript!',
    arr = str.split(' ');

upFirst(arr); //'Я Учу Javascript!'

function upFirst(arr) {
    var result = arr.map(function (item) {
        return item[0].toUpperCase() + item.slice(1);
    });

    return result.join(' ');
}

//----------------------- TASK #11 -----------------------
var text = 'var_test_text';

camelCase(text); // varTestText

function camelCase(str) {
    var arr = text.split("_");

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');

}

//----------------------- TASK #12 -----------------------
var str = 'varTestText';

function separator(str) {
    var arr = str.split('');

    for (var i = 0; i < 10; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
            arr.splice(i, 0, '_');
        }
    }

    return arr.join('');

}

separator(str);

//----------------------- TASK #13 -----------------------
var num = '12345678',
    num2 = '12345678684165';

spaces(num); // '12 345 678'
spaces(num2); // '12 345 678 684 165'

function spaces(str) {
    var arr = str.split('').reverse(),
        newStr = '',
        result;

    for (var i = 0; i < arr.length; i++) {
        if ( (i + 1) % 3 === 0) {
            newStr += arr[i] + " ";
        } else {
            newStr += arr[i];
        }
    }

    result = newStr.split('').reverse().join('');

    return result.trim();
}