//TASK #1
var a = +prompt("Enter a number", '0');
if (a === 0) {
    console.log("Right")
} else {
    console.log("Wrong");
}

//TASK #2
var x = 'test';
if (x === 'test') {
    console.log("Right");
} else {
    console.log('Wrong');
}

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

//TASK #4
var t = 3,
    h = 1,
    result = t + h;
if (result > 5) {
    result = 5;
} else {
    result *= 10;
}
console.log(result);

//TASK #5
var n = 5;
if (n === 0 || n === 2) {
    n = n / 10;
} else {
    n += 7;
}
console.log(n);

//TASK #6
var i = 1,
    j = 3;
if (i <= 1 && j >= 3) {
    console.log(i + j);
} else {
    console.log("Wrong");
}

//TASK #7
var g = 4,
    d = 7;
if ((g > 2 && g < 11) || (d >= 6 && d < 14)) {
    g += 2;
} else {
    g += 5;
}
console.log(g);

//TASK #8
var num = +prompt("Enter a number in range from 1 to 4 ", '1'),
    res;
switch (num) {
    case 1:
        res = "Зима";
        break;
    case 2:
        res = "Лето";
        break;
    case 3:
        res = "Осень";
        break;
    case 4:
        res = "Весна";
        break;
    default:
        alert("Something went wrong");
        break;
}
console.log(res);

//TASK #9
var ru = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    de = [Mo, Di, Mi, Do, Fr, Sa, So],
    en = [Mo, Tu, We, Th, Fr, Sa, Su],
    arr = [],
    lang = prompt("Specify lang please");
if (lang === "ru") {
    arr = ru;
}
console.log(arr);