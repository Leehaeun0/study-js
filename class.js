// // Array 생성자 함수를 상속받아 확장한 MyArray
// class MyArray extends Array {
//   // static get [Symbol.species]() {
//   //   return Array;
//   // }

//   // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
//   uniq() {
//     console.log(this);
//     return this.filter((v, i, self) => self.indexOf(v) === i);
//   }

//   // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
//   average() {
//     console.log(this);
//     return this.reduce((pre, cur) => pre + cur, 0) / this.length;
//   }
// }

// const myArray = new MyArray(1, 1, 2, 3);
// console.log(myArray); // MyArray(4) [1, 1, 2, 3]

// // MyArray.prototype.uniq 호출
// console.log(myArray.uniq()); // MyArray(3) [1, 2, 3]
// // MyArray.prototype.average 호출
// console.log(myArray.average()); // 1.75

class MyArray extends Array {
  // 모든 메소드가 Array 타입의 인스턴스를 반환하도록 한다.
  static get [Symbol.species]() {
    return Array;
  }

  // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
  uniq() {
    console.log(this);
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
  average() {
    console.log(this);
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);

console.log(myArray.uniq() instanceof MyArray); // false
console.log(myArray.uniq() instanceof Array); // true

// 메소드 체이닝
// uniq 메소드는 Array 인스턴스를 반환하므로 average 메소드를 호출할 수 없다.
// console.log(myArray.uniq().average());
// TypeError: myArray.uniq(...).average is not a f
