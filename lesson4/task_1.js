//----------------------- TASK #1 -----------------------
function getPrimeNums(from, to) {
    var arr = [];
    for (var i = to; i >= from; i--) {
        if (primeNums(i)) {
            arr.push(i);
        }
    }
    return arr.reverse();
}

getPrimeNums(2, 10);

function primeNums (x) {
    if ( x !== 1 && x <= 3 ) {
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

//----------------------- TASK #2 -----------------------
var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var arr = obj.className.split(' '),
        i;
    for (i = 0; i < arr.length; i++) {
        if ( arr[i] === cls ) {
            return;
        }
    }
    arr.push(cls.trim());
    obj.className = arr.join(" ");
}

//----------------------- TASK #3 -----------------------
var obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' '),
        i;
    for (i = 0; i < arr.length; i++) {
        if ( arr[i] === cls.trim() ) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

//----------------------- TASK #4 -----------------------
function sumArr() {
    var ask = prompt('nums?');
    arr = [];

    while (!isNaN(parseFloat(ask)) && isFinite(ask)) {
        arr.push(+ask);
        ask = prompt('nums?');
    }
    var result = arr.reduce(function(sum, current) {
        return sum += current;
    }, 0);
    return result;
}

sumArr();

//----------------------- TASK #5 -----------------------
function fib(n) {
    var prev = 1;
    var next = 1;
    for (var  i = 3; i <= n ; i++){
        var result = prev + next;
        prev = next;
        next = result;
    }
    return next;
}
fib(7);

//----------------------- TASK #6 -----------------------
var str = prompt("Enter something");
if (str.length >= 20) {
    console.log(str.slice(0, 5) + "...");
} else {
    console.log(str);
}
