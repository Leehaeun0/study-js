// 2. Number.Property (넘버란 객체에 저장되어있는 프로퍼티 값)

// Number.EPSILON
console.log(Number.EPSILON); // 2.220446049250313e-16



// Number.MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

var num = 10;
console.log(num * Number.MAX_VALUE); // Infinity

console.log(Infinity > Number.MAX_VALUE); // true



// Number.MIN_VALUE
console.log(Number.MIN_VALUE); // 5e-324
var min = Number.MIN_VALUE;

var num2 = 10;
console.log(num2 + min ); // 10
console.log(num2 * min ); // 5e-323
console.log(num2 / min ); // Infinity



// Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Infinity

console.log(10 - Number.POSITIVE_INFINITY); // -Infinity



// Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // -Infinity

console.log(10 - Number.NEGATIVE_INFINITY); // Infinity



// Number.NaN
console.log(Number(3)); // 3
console.log(Number('abc')); // NaN
console.log(1 * 'string'); // NaN
console.log(typeof NaN); // number



// 3. Number.Method (넘버란 객체에 저장되어 있는 메소드 즉 함수)

// 3.1 Number.isFinite(testValue: number): boolean

console.log(Number.isFinite(1)); // true
console.log(Number.isFinite('1')); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(null)); // false
console.log(Number.isFinite(2e64)); // true



// 3.5 Number.prototype.toExponential(fractionDigits?: number): string

// 1234 => 1.234e+3 숫자를 지수 표기법으로 변환해서 문자열로 반환한다.
// numObj.toExponential([fractionDigits])

var numObj = 77;

console.log(numObj.toExponential()); // logs 7.7e+1
console.log(numObj.toExponential(4)); // logs 7.7000e+1
console.log(numObj.toExponential(2)); // logs 7.70e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
//  console.log(77.toExponential());      // SyntaxError: Invalid or unexpected token
//  숫자뒤의 . 은 부동소수점 으로 인식한다.
//  . 뒤에 . 은 첫번쨰는 부동소수점 두번쨰는 프로퍼티 접근의 마침표표기법으로 인식.
//  따라서 정수 리터럴과 함께 메소드를 사용할 경우 이렇게 써라
console.log((77).toExponential()); // 7.7e+1
console.log(77 .toExponential()); // logs 7.7e+1



// 3.6 Number.prototype.toFixed(fractionDigits?: number): string
// 매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.

var numObj2 = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj2.toFixed()); // '12346'
// 소숫점 이하 1자리수 유효, 나머지 반올림
console.log(numObj2.toFixed(1)); // '12345.7'
// 소숫점 이하 2자리수 유효, 나머지 반올림
console.log(numObj2.toFixed(2)); // '12345.68'



// 3.7 Number.prototype.toPrecision(precision?: number): string
// 매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다.
// 지정된 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.

var numObj3 = 15345.6789;

// 전체자리수 유효
console.log(numObj3.toPrecision()); // '12345.6789'
// 전체 1자리수 유효, 나머지 반올림
console.log(numObj3.toPrecision(1)); // '2e+4'
// 전체 6자리수 유효, 나머지 반올림
console.log(numObj3.toPrecision(6)); // '12345.7'



// 3.8 Number.prototype.toString(radix?: number): string
// 숫자를 문자열로 변환하여 반환한다.

var count = 10;
console.log(count.toString()); // '10'
console.log((17).toString()); // '17'



// 3.9 Number.prototype.valueOf(): number
// Number 객체의 원시 타입 값(primitive value)을 반환한다.

var numObj4 = new Number(15);
console.log(numObj4); // Number 15 {}
console.log(typeof numObj); // object

var num4 = numObj4.valueOf();
console.log(num4); // 15
console.log(typeof num4); // number
