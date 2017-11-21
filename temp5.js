//PROMISE
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var num = +prompt('Number', '0');

        if (num % 2 === 0) {
            resolve(true);
        } else reject(true);
        }, 1500);
});

promise
    .then(
        function (arg) {
            console.log('ВСЕ ОК');
        },
        function (arg) {
            console.log('ВСЕ ОЧЕНЬ ПЛОХО');
        }

    );



//NOTICE
// if (arr.lenght === 0)
// if (str.length === 0)