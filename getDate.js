const today = new Date('2020-04-15');
// -> Thu Mar 26 2020 14:16:43 GMT+0900 (대한민국 표준시)

console.log(today.getDate()); // -> 26
console.log(today.getDay()); // -> 26

let nums = [1, 2, 3, 4, 5, 6];
let arr = [];

nums.forEach(num => {
  if (num === 3) return;
  arr = [...arr, num];
});

nums = arr;
console.log(nums);

const str = 'hello world';

// substring과 slice 메소드는 동일하게 동작한다.
// 0번째부터 5번째 이전 문자까지 잘라내어 반환
console.log(str.substring(-2, 1)); // -> 'hello'
console.log(str.slice(0, -6)); // -> 'hello'

console.log(new Date('2020.05.03') - new Date('2020.05.01') );