const person = new Object();
console.log(typeof person);
console.log(person);


function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
console.log(circle1);
console.log(Circle());
console.log(circle1.getDiameter());


console.log('---------');
function foo() {
  console.log(this);
}

// 일반적인 함수로서 호출
foo(); // window

// 메소드로서 호출
const obj = { foo }; // ES6 프로퍼티 축약 표현
obj.foo(); // { foo: [Function: foo] }

// 생성자 함수로서 호출
const inst = new foo(); // inst // 빈객체 {}