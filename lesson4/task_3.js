//----------------------- TASK #2 -----------------------
function sumTo(n) {
    var sum = 0,
        i;

    for (i = n; i >= 0; i--) {
        sum += i;
    }

    return sum;

}

sumTo(5); //15
sumTo(4); //10
sumTo(2); //3

//----------------------- TASK #3 -----------------------
var vasya = { name: 'Вася', age: 23 },
    masha = { name: 'Маша', age: 18 },
    vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function sortByAge(a, b) {
    return a.age - b.age;
}

people.sort(sortByAge).forEach(function(item) {
    console.log(item.name);
});

//----------------------- TASK #4 -----------------------
var arr = ['array', 'notebook', 'book', 'javascript', 'java', 'array', 'book', 'task', 'array'];

// Variant 1
function unique(arr) {
    var result = arr.reduce(function (total, current) {
        if (total.indexOf(current) === -1) {
            total.push(current);
        }
        return total;
    }, []);

    return result;
}

unique(arr);

// Variant 2
function unique(arr) {
    var obj = {},
        keys;

    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        obj[key] = true;
    }

    keys = Object.keys(obj);
    return keys;

}