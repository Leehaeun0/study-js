// 객체
const foo = {
  name: 'lee',
  age: 25,
};

const bar = {
  a: 'name',
  b: 'age',
};

function c() {
  console.log(`a`);
}

console.log(foo.name);
console.log(foo['name']);
console.log(foo[bar.a]);
console.log(foo[bar['b']]);

// 배열
arr = [6, 4, 2]
console.log(arr[1]);