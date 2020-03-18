// 1
// 선형 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 존재하는 경우 해당 인덱스를 반환하고
// 존재하지 않는 경우 -1을 반환하는 함수를 구현하라. 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1; // for 문 밖에 써야 한다. for문이 찾을때까지 배열을 전부 돌도록 내버려둬야 함
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1


console.log('--------------');
// 2
// 이진 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여
// 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하라.
// mid = mid % 2 ? (mid + 1) / 2 : mid / 2; < 소수점 반올림 하는 식

function binarySearch(array2, target) {
  let n = 0;
  let start = array2[0];
  let end = array2[array2.length - 1];
  let mid;

  while (n < array2.length / 2) {
    mid = Math.floor((start + end) / 2);
    if (target > array2[mid]) {
      start = mid + 1;
      // console.log(start, end, mid);
    }
    else if (target < array2[mid]) {
      end = mid - 1;
      // console.log(start, end, mid);
    }
    else if (target === array2[mid]) {
      return mid;
    }
    n++;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1


// function bubbleSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let n = array.length - 1; n > 0; n--) {
//       console.log(array[i],array[n]);
//     }
//   }
// }

// console.log(bubbleSort([2,4,5,1,3])); // [1,2,3,4,5]
// console.log(bubbleSort([5,2,1,3,4,6])); // [1,2,3,4,5,6]
// console.log(bubbleSort([3,1,0,-1,4,2])); // [-1,0,1,2,3,4]
