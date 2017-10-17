//TASK - 1
var str = "Have a good day!";
console.log(str);

//TASK - 2
var age = 25;
console.log(age);
age = undefined;
console.log(age);

//TASK - 3
var info = {
    name: 'Alex',
    age: 25
};
console.log(info.name, info.age); //Alex, 25

var name = info.name; //Alex
console.log(name); //Alex

delete info.name;
console.log(name); //Alex

//TASK - 4
var customArray = [12, 25, 96];
console.log(customArray);
customArray = 0;
console.log(customArray);

//TASK - 5
var student = "Alex";
console.log(student);
student = "Avramenko Alex";
console.log(student);

//TASK - 6
var complex = ['My name is:', 7, null, info];
console.log(complex[2]);

//TASK - 7
var complexObj = {};
complexObj.name = 'Alex';
complexObj.age = 25;
complexObj.friends = ['Olga', 'Andrey', 'Dima', 'Maks', 'Oksana'];
complexObj.soc_links = {
    facebook: "https://www.facebook.com/alexandr.avramenko.395",
    google: 'https://plus.google.com/105297208057846641927'
};
var result = `My name is ${complexObj.name}. I am ${complexObj.age}. I have a lot of friends, but the best one is ${complexObj.friends[0]}. 
You can find me on facebook: ${complexObj.soc_links.facebook} or on google groups: ${complexObj.soc_links.google}`;
console.log(result);

