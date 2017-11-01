//----------------------- TASK #1 -----------------------
function getName(x, y) {
    x = prompt("What is your name?");
    y = "Hello, " + x;
    alert(y);
}
getName();

//----------------------- TASK #2 -----------------------
function double(x) {
    x *= 2;
    console.log(x);
}
double(6);

//----------------------- TASK #3 -----------------------
function range(x, y) {
    var r = 0;
    if (x < y) {
        for (x; x <= y; x++) {
            r += x;
        }
        return r;
    } else if (x > y) {
        for (y; x >= y; y++) {
            r += y;
        }
        return r;
    }
}
range(1, 3);

//----------------------- TASK #4 -----------------------
function getPrimesSumBelow(num) {
    var sum = 0;
    for (var i = num; i > 1; i--) {
        if (primeNums(i)) {
            sum += i;
        }
    }
    return sum;
}

getPrimesSumBelow(10);

function primeNums (x) {
    if ( x !== 1 && x <= 3) {
        return 1;
    } else {
        for (var i = 2; i < x; i++) {
            if (x % i === 0) {
                return 0;
            }
        }
        return 1;
    }
}

//----------------------- TASK #5 -----------------------
function typeOfNum(n) {
    if (n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
typeOfNum(+prompt("Enter a number please"));

//----------------------- TASK #6 -----------------------
function allOddNums(start, end) {
    var arr =[];
    for (start; start <= end; start++) {
        if (typeOfNum(start)) {
            arr.push(start);
        }
    }
    return arr;
}
allOddNums(2, 15);

////----------------------- TASK #7 -----------------------
function ask(n) {
    if (n !== 9) {
        return ask(+prompt("Try again"))
    } else {
        alert("Good job!")
    }
}
ask(+prompt("Enter 9 please"));