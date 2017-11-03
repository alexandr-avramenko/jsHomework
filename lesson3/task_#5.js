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