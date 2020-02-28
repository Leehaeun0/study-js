// var test = (function test() {
//     console.log('a');
//     return 'a';
// })();

// console.log(test);

// console.log(test());

// ((function add(x, y) {
//     return x + y;
// })())

(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res);

var elem = {
    // value : 8,
    key : 3
};
var value = elem && elem.value;
var value2 = elem.value || elem;
console.log(value);
console.log(value2);