var str = 'varTestText';

function separator(str) {
    var arr = str.split('');
    console.log(arr);

    for (var i = 0; i < 10; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
            arr.splice(i, 0, '_');
            console.log(arr);
        }
    }

    return arr;

}



separator(str);