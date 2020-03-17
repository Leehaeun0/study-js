// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.
var x = 15;

if (x > 10 && x < 20) {
  console.log(x);
}

console.log('-----------------');
// // 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오
for (let i = 0; i < 10; i++) {
  if ( !(i % 2) ) console.log(i);
}

console.log('-----------------');
// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오
let str = []
for (let i = 0; i < 10; i++) {
  if ( !(i % 2)) {
    str.push(i)
    // console.log(`${i}` + "");
  }
}
console.log(str.join(''));

console.log('-----------------');
// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰 수부터 출력하시오
for (let i = 10; i >= 0; i--){
  if (i % 2) console.log(i)
}

console.log('-----------------');
// 5. while문을 사용하여 0부터 10미만인 정수 중에서 짝수만을 작은 수부터 출력하시오
var d = 0;
while (d < 10) {
  if (!(d % 2)) console.log(d);
  d++;
}

console.log('-----------------');
// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오
var e = 10;
while (e >= 0) {
  if (e % 2) console.log(e);
  e--;
}

console.log('-----------------');
// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
var count = 0;
for (let i = 0; i < 10; i++) {
  count = i + count; // 한바퀴 돌기 전 이전의 내가 지금의 나한테 더해져야 한다. 이게 핵심 / count += i; 와 같다. 재사용
}
console.log(count);

console.log('-----------------');
// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오
var plus = 0;
for (let i = 0; i < 20; i++) {
  if (!(i % 2)) continue;
  if (!(i % 3)) continue;
    plus = i + plus;
}
console.log(plus);

console.log('-----------------');
// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var sum = 0;
for (let i = 0; i < 20; i++) {
  if (!(i % 2)) {
    sum = i + sum;
  } else if (!(i % 3)){
    sum = i + sum;
  }
}
console.log(sum);