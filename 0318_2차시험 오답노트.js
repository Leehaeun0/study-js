// 1
function foo() {
  x = 15; // 암묵적 전역이 일어나서 콘솔창에 찍힌다.
  // var x = 1ß5; // 변수가 함수 스코프에만 해당됨으로 레퍼에러가 난다.
}
foo();
console.log(x);


// 2
var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5


// 3
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x); // 함수는 [정의]된 곳에서 '스코프'가 결정된다. 스코프는 '식별자'를 저장하고 있다. / 함수가 호출될때 결정되는 'this'랑 헷갈리지 말 것.
}

foo(); // 함수를 호출한다고 콘솔창이 찍히는게 아니라 호출된 함수가 동작할떄 콘솔로그 동작을 해서 콘솔창이 찍히는 것이다.
bar();
console.log(foo()); // 1   undefined  // 함수를 호출 함으로서 함수가 동작해서 콘솔 1이 찍힌다. 함수 자체 평가된 값은 리턴값이 명시되지 않았을때 undefined를 반환한다.
console.log(foo); // [Functioon: foo]


// 4
const bird = {
  size : 'small'
};

const mouse = {
  name: 'Mikey',
  small: true
};

mouse.bird // undefined
// mouse.bird.size // TypeError  // mouse.bird 까지는 undefined로 나온다. undefined.size 와 같다. undefined값은 객체가 아니므로 타입에러
mouse[bird.size]
console.log(mouse[bird.size]) // true // [] 는 프로퍼티 대괄호 표기법이다. 식별자 네이밍 규칙을 따르지 않을 경우에는 [" "]로 써야한다. 
// bird.size -> 'small' / mouse.small 은 true
mouse[bird["size"]]
console.log(mouse[bird["size"]]) // true


// 5
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog';

console.log(bark) // [Function: bark] { animal: 'dog' }
console.log(bark()) // Woof!   undefined
