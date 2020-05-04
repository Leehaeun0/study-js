const arr = [1, 2, 3].map((number, index) => ({ [index]: number }));

const arr2 = [1, 2, 3].map((number, index) => {
  return { [index]: number };
});

console.log(arr);
console.log(arr2);

const func = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  1; // 한줄이 아닐 때도 중괄호와 리턴 생략이 가능하다!!

console.log(func());
