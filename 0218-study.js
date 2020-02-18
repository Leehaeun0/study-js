function countBiggerThanTen(numbers) {
  let a = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      a++;
    }
  }
  return a;
}
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;
