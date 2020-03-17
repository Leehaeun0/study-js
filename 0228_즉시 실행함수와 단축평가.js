var test = (function test() {
    console.log('a');
    return 'b';
})();

console.log(test); // 함수 호출까지를 test에 할당했음 // b

// console.log(test()); // 함수 호출을 완료한 값 'a'에 ()호출을 붙였으므로 타입에러 뜸

var test2 = (function test2() {
    console.log('c');
    return 'd';
});

console.log(test2); // 함수 객체 그 자체 [Funtion: test2]

console.log(test2()); // 함수를 참조 후 호출함 // d



var elem = {
    // value : 8,
    key : 3
};

var value = elem && elem.value;
var value2 = elem.value || elem;

console.log(value);  // undefined
console.log(value2);  // { key: 3 }