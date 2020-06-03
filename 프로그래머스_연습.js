const sum = (more, less) => {
  let arr = [];
  for (let i = less; i <= more; i++) {
    arr = [...arr, i];
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
};

function solution(a, b) {
  if (a === b) return a;
  if (a > b) return sum(a, b);
  if (b > a) return sum(b, a);
}
