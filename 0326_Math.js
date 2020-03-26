// Math 라는 객체는 계산을 위한 프로퍼티와 메소드를 제공하는 빌트인 객체다.
// Math 객체는 Number처럼 생성자 함수가 아니다. 따라서 Math 객체는 정적 프로퍼티와 메소드만 제공한다.



// [1. Math Property]

// 1.1 Math.PI

console.log(Math.PI); // 3.141592653589793



// [2. Math Method]

// 2.1 Math.abs(x: number): number
// 인수의 절댓값(absolute value)을 반환한다. 절댓값은 반드시 0 또는 양수이어야 한다.

console.log(Math.abs()); // NaN
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-1')); // 1
console.log(Math.abs([])); // 0
console.log(Math.abs('')); // 0
console.log(Math.abs(null)); // 0
console.log(Math.abs(-Infinity)); // Infinity
console.log(Math.abs(Symbol)); // NaN
console.log(Math.abs({})); // NaN
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs('a')); // NaN



// 2.2 Math.round(x: number): number
// 인수의 소수점 이하를 '반올림'한 정수를 반환한다.

console.log(Math.round(1.3)); // 1
console.log(Math.round(1.3642)); // 1
console.log(Math.round(1.7)); // 2
console.log(Math.round(-1.3)); // -1
console.log(Math.round(-1.7)); // -2
console.log(Math.round(NaN)); // NaN



// 2.3 Math.ceil(x: number): number
// 인수의 소수점 이하를 '올림'한 정수를 반환한다.
// 음수의 올림은 앞자리 수가 그대로인 것에 주의하자.

console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2
console.log(Math.ceil(-1.3)); // -1
console.log(Math.ceil(-1.7)); // -1



// 2.4 Math.floor(x: number): number
// 인수의 소수점 이하를 '내림'한 정수를 반환한다.
// 음수의 내림은 앞자리 수가 높아지는 것에 주의하자.

console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1
console.log(Math.floor(-1.3)); // -2
console.log(Math.floor(-1.7)); // -2



// 2.5 Math.sqrt(x: number): number
// 인수의 제곱근을 반환한다.

console.log(Math.sqrt());
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(5)); // 2.23606797749979
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(0)); // 0



// 2.6 Math.random(): number
// 랜덤의 부동 소수점을 반환한다. 반환된 부동 소수점은 0부터 1미만이다. 즉, 0은 포함되지만 1은포함되지 않는다.

console.log(Math.random()); // 0.14881677152916262
console.log(Math.random()); // 0.1397713721567473

const random = Math.floor((Math.random() * 10) + 1); // 0일 경우를 방지하기 위해 1을 더한다.
console.log(random); // 1 ~ 10까지의 정수를 랜덤으로 구함



// 2.7 Math.pow(x: number, y: number): number

console.log(Math.pow(2, 6)); // 64
console.log(2 ** 6); // 64
console.log(Math.pow(2, -1)); // 0.5
console.log(Math.pow(2)); // NaN



// 2.8 Math.max(…values: number[]): number
// 인수 중에서 가장 큰 수를 반환한다.

console.log(Math.max()); // -Infinity
console.log(Math.max(4, 1, 3)); // 4

const arr = [7, 2, 5];
console.log(Math.max(...arr)); // 7
console.log(Math.max.apply(null, arr)); // 7



// 2.9 Math.min(…values: number[]): number
// 인수 중에서 가장 작은 수를 반환한다.

console.log(Math.min()); // Infinity
console.log(Math.min(1, 2, 3)); // 1

const arr2 = [7, 2, 5];
console.log(Math.min(...arr2)); // 2
console.log(Math.min.apply(null, arr2)); // 2