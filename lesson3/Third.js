var name = "Vasya";

function getData(age) {

    return {
        name: name, //Vasya
        age: age
    };
}

var newData = getData(20);
var newDataElse = getData();

console.log(newData, newDataElse);
/*
newData
{ name: Vasya, age: 20 }
newDataElse
{ name: Vasya, age: undefined }
 */
