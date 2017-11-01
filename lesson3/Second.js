//----------------------- TASK #1 -----------------------
for (var i = 1; i <= 50; i++) {
    console.log(i);
}

//----------------------- TASK #2 -----------------------
var arr = [1, 2, 3, 4, 5];
for (var x = 0; x < arr.length; x++) {
    console.log(arr[x]);
}

//----------------------- TASK #3 -----------------------
var mass = [2, 3, 4, 5];
var result = 1;
for (var z = 0; z < mass.length; z++) {
    result *= mass[z];
}
console.log(result);

//----------------------- TASK #4 -----------------------
var obj = {
    Minsk: "Беларусь",
    Moscow: "Россия",
    Kiev: "Украина"
};
for (var key in obj) {
    console.log(key + " - " + "это " + obj[key] + ".");
}

//----------------------- TASK #5 -----------------------
var n = 1000,
    num;
for (num = 0; n > 50; num++) {
    n /= 2;
}
console.log('Число: ' + n);
console.log('Количество итераций: ' + num);

//----------------------- TASK #6 -----------------------
var array = [2, 5, 9, 15, 0, 4],
    nArr = [],
    t;
for (t = 0; t < array.length; t++) {
    if (array[t] > 3 && array[t] < 10) {
        nArr.push(array[t]);
    }
}
console.log(nArr);

//----------------------- TASK #7 -----------------------
var date = new Date(),
    current = date.getMonth(),
    p,
    m = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November"
];
for (p = 0; p < m.length; p++) {
    if (p === current) {
        document.write(m[p].bold());
    } else {
        document.write(m[p]);
    }
    document.write("<br \/>");
}