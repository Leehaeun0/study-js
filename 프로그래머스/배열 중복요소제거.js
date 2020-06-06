function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.includes(arr[i])) return;
    answer.push(arr[i]);
  }
  console.log('Hello Javascript');
  console.log(answer);
  
  return answer;
}

solution([1, 2, 2, 3]);
console.log(solution([1, 2, 2, 3]));


const solution1 = s => +s;