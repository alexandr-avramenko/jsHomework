## 1 задание

Определите результат и тип переменных в следующих случаях:

```javascript
var r = '9' + 0; // '90'

var r = 9 + '0'; // '90'

var r = 4 + 9; // 13

var r = null + 7; // 7

var r = '6' + null; // '6null'

var r = '6' + []; // '6'

var r = '6' + undefined; // '6undefined'
```

## 2 задание

Будет ли верным  выражение:

```javascript
2/3 + 1 + 1/3 == 2
```
Опишите почему да или нет?

/* 
    Выражение не верное. Причина тому, дробные числа. В двоичной системе счисления, результат "0.6" от операции "2/3" это бесконечная дробь 
    так как 6 на десять в двуичной системе так просто не делится. На число выделяется ровно 64 бита потому двоичное значение бесконечных дробей 
    хранится только до определенного знака. Поэтому возникает неточность.     
*/
var result = 2/3 + 1 + 1/3;
console.log(result.toFixed(20));

## 3 задание

Определите результат в следующих случаях:

```javascript
var r;
var t = ++2;
var u = 1++;
var w = 2--;

r = 6 && 0 && 7; // 0

r = -9 && -8; // -8

r = 6 && 0 && 7; // 0

r = "string" && 0; // 0

r = [] && {} && 7; // 7

r = [] || 7; // 
 
r  = {} || 0; //

r = false || true; //

r = "2" > "3"; //

r = "ab" <= "fg"; //

r = "2k" <= "8l"; //

r = "2" != 2; //

r = "2" !== 2; //

r = t + 2; //

r = t + 2--; //

r = u - w; //
```

