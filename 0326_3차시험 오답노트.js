// 1. 맞음
function sayHi() {
  console.log(name); // undifined
  // console.log(age); // ReferenceError
  
  var name = 'Lee';
  let age = 20;
}

sayHi();




// 2.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
  console.log(i); // 0, 1, 2
}
// 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// 0 1 2
/* 블록문에서의 var는 전역객체에 저장되고 별도의 렉시컬 환경을 만들지 않는다.
   let은 블록문에서도 독립된 렉시컬 환경을 만든다. 스텍과 이벤트 큐를 알아야 한다. */



// 3.

// window.radius = 10; // 윈도우 환경에서 전역객체에 프로퍼티 추가하면 결과는 62.831... 로 나온다. 
/* module.exports.radius = 10; // node js 환경에서 전역객체는 module.exports이고 
   여기에 프로퍼티 추가하면 결과는 62.831... 로 나온다. */

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN




// 4.
function Person1( firstName, lastName ) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member1 = new Person1('Ungmo', 'Lee');

Person1.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member1); // Person1 { firstName: 'Ungmo', lastName: 'Lee' }
console.log(Person1); // [Function: Person1] { getFullName: [Function (anonymous)] } 
// [Function (anonymous)]란? 함수의 참조값을 저장해 두는 것 메모리 절약을 할 수 있다.

// console.log(member1.getFullName()); // TypeError 
// member1.getFullName 은 undefined이고 undefined() 은 함수가 아나라 함수호출을 할 수 없다고 타입에러가 뜬다.




// 5.
function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member2 = new Person2('Ungmo', 'Lee');

Person2.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(Person2.getFullName());




// 6.
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lee = Person3('Ungmo', 'Lee');

console.log(lee);



// 7.
let x = 3;
let y = new Number(3);
let z = 3;

console.log(y); // Number 3 {} 레퍼객체 3이고 일시적 객체지만 값을 3으로 가진다.

console.log(x == y); // true
console.log(x === y); // false
console.log(z === y); // false

// console.log({ Number : 3} == 3); // Number{3} 
// console.log({3} == 3); // Number{3} 


