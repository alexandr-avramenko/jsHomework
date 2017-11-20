var ul = document.querySelector('ul'),
    input = document.querySelector("input"),
    but = document.querySelector("button"),
    spans = document.querySelectorAll('span');

but.addEventListener('click', function () {
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
}, true);

//remove parent element
ul.addEventListener('click', function(e) {
    console.log(e.target, e.target.nodeName);

    if (e.target.nodeName === 'SPAN') {
        e.target.parentNode.remove();
    }

});