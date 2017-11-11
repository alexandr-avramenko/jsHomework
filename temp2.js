// document.getElementByTagName - возвращает псевдомассив
// # - for id
// . - for class
// closest method


// var name = prompt("Your Name?");
// document.querySelector('h1').innerText = ("Hello " + name);


// var ask = +prompt('How much div would you like to add?'),
//     i;
// for ( i = 0; i < ask; i++) {
//     var divs = document.createElement('div');
//     document.body.appendChild(divs);
//     divs.innerText = ('DIV' + i);
// }

var but = document.querySelector('button'),
    text = but.innerText;
but.addEventListener('click', function () {
    alert(text);
    console.log(90);
});