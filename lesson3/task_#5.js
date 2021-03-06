//----------------------- TASK #1 -----------------------
var end = +prompt("Specify the endpoint");
for ( var i = 0; i <= end; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

//----------------------- TASK #2 -----------------------
for ( var j = 1; j <= 100; j++ ) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log(j + " is FizzBuzz");
    } else if (j % 3 === 0) {
        console.log(j + " is Fizz");
    } else if (j % 5 === 0) {
        console.log(j + " is Buzz");
    }
}

//----------------------- TASK #3 -----------------------
function GCD(first, second) {
    if (second % first === 0) {
        return first;
    } else {
        for ( var i = second; i > 0; i--) {
            if (first % i === 0 && second % i === 0) {
                return i;
            }
        }
    }
}

console.log(GCD(10, 20));

//----------------------- TASK #4 -----------------------
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

//----------------------- TASK #5 -----------------------
for ( var i = 10; i <= 90; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

//----------------------- TASK #6 -----------------------
var arr = [];
for ( var i = 11; i <= 70; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr.reverse().join());

//----------------------- TASK #7 -----------------------
var evenNums = [];
for ( var i = 13; i <= 78; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        evenNums.push(i);
    }
}
console.log(evenNums.reverse().join());