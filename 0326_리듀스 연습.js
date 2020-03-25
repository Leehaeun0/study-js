// 평균 구하기
const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce( ( acc, val, i, arr ) => {
  return arr.length - 1 === i ? (acc + val) / arr.length : acc + val;
}, 0);

console.log(average); // 3.5




// 최대값 구하기
const values2 = [4, 2, 1, 3, 5];

const max = values2.reduce(( acc, cur ) => (acc < cur ? cur : acc), 0);
// const max = Math.max(...values2);
// var max = Math.max.apply( null, values2); // es5

console.log(max); // 5




// 중복된 요소의 갯수 구하기
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {

  // acc[cur] += fruits.includes(cur) ? 1 : 0; // 프로퍼티 식별자 초기화값 undefined 때문에 += 실패

  /* 조건에 따라 할당문을 써야해서 if 문으로 변경
  if (fruits.includes(cur)) {
    if (acc[cur] >= 0) acc[cur] += 1; else acc[cur] = 1;
  }
  */

  acc[cur] = (acc[cur] + 1) || 1; // acc[cur] + 1 는 NaN 로 계산되어 Fasthy가 된다.
  // acc[cur] = (acc[cur] || 0) + 1;

  return acc;
}, {});

console.log(count); // { banana: 1, apple: 2, orange: 2 }




// 중첩 배열 평탄화
const values3 = [1, [2, 3], 4, [5, 6]];

// const flatten = values3.reduce( ( acc, cur ) => acc.concat(cur), []);
const flatten = values3.flat();

console.log(flatten); // [1, 2, 3, 4, 5, 6]




// 중복요소 제거
const values4 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values4.reduce( ( acc, cur ) => {
  // console.log(acc.indexOf(cur));
  if (acc.indexOf(cur) < 0) acc.push(cur);
  return acc;
}, []);

const result1 = values4.reduce((acc, cur, i, arr) => {
  // console.log(arr.indexOf(cur)); // 0, 1, 0, 3, 4, 5, 4, 3, 5, 5
  // i 는 원본 배열의 인덱스를 그대로 반환하는 값이고, arr.indexOf(cur)는 원본배열에서 요소의 첫번째 값의 인덱스만 반환한다.
  // [1, 2, 1, 3, 5, 4, 5, 3, 4, 4] 를 세번째 돌때, i 는 2 지만 arr.indexOf(cur)는 첫번째 요소의 인덱스인 0 을 가르킨다.
  if (arr.indexOf(cur) === i) acc.push(cur);
  return acc;
}, []);

// const result = values4.filter( (v, i, arr) => arr.indexOf(v) === i );

console.log(result); // [1, 2, 3, 5, 4]
console.log(result1); // [1, 2, 3, 5, 4]




// 객체의 특정 프로퍼티 값을 합산 - price
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];

// 1번째 순회 : acc => 0,   cur => { id: 1, price: 100 }
// 2번째 순회 : acc => 100, cur => { id: 2, price: 200 }
// 3번째 순회 : acc => 300, cur => { id: 3, price: 300 }
const priceSum = products.reduce(( acc, cur ) => acc + cur.price, 0);

console.log(priceSum); // 600
