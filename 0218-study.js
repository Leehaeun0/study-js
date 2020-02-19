// 내가 푼 퀴즈 정답
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


// 
function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
}

const count2 = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count2); // 5

export default countBiggerThanTen;


// 
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    let count3 = 0;
    numbers.forEach(n => {
        if (n > 10) {
            count3++;
        }
    });
    return count3;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count3); // 5

export default countBiggerThanTen;


// 
function countBiggerThanTen(numbers) {
    return numbers.reduce((acc, current) => {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  