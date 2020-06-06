function solution(n) {
  const arr = [2];
  let i = 2;
  while (i <= n) {
    for (let j = 2; j < i; j++) {
      if (!(i % 2) || !(i % j)) break;
      if (j === i - 1) arr.push(i);
    }
    i++;
  }

  // for (let i = 2; i <= n; i++) {
  //     for (let j = 2; j < i; j++) {
  //         if (!(i % 2) || !(i % j)) break;
  //         if (j === i - 1) arr.push(i);
  //     }
  // }
  return arr.length;
}

//

function solution2(n) {
  const arr = [2];
  let i = 2;
  while (i <= n) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      console.log(Math.sqrt(i));
      if (!(i % 2) || !(i % j)) break;
      if (i > 7 && (!(i % 3) || !(i % 5) || !(i % 7))) break;
      if (j === i - 1) arr.push(i);
    }
    i++;
  }
  return arr.length;
}
