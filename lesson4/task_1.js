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