// lib.mjs

const foo = 'foo';

const bar = () => {
  console.log('foo'); // 모듈스코프. 바라보고 있다.
};

// export const foo = 'foo';

// export const bar = () => {
//   console.log('bar');
// };

export { bar };

var x = 1;
console.log(window.x);