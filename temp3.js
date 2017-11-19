// var but = document.querySelector('button'),
//     int = document.querySelector('input');
//
// int.addEventListener('focus', focus);
//
// but.addEventListener('click', function() {
//     int.removeEventListener('focus', focus);
// });
// function focus() {
//     console.log(int.value);
// }

//-----------------SECOND

var button = document.querySelector('button'),
    input = document.querySelector('input');

input.addEventListener('focus', function () {
    console.log(this.value);
});

//--------
//keypress - введение значения;
//keydown - нажатие любой кнопки;


//---
var liList = document.querySelectorAll('li');

function onClickOnLi() {
    console.log(this.innerHTML);
}

liList.forEach(function (li) {
    li.addEventListener('click', onClickOnLi);
});

//--
var li = document.querySelector('li');
var input = document.querySelector('input');

input.addEventListener('change', function () {
    console.log(this.value);
});

input.addEventListener('input', function () {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 9);
    }
});