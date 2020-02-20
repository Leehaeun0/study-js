// const grade = get(90);
console.log(get(90));
// console.log(haeun);
// console.log(haeun(90));
console.log(haeun);

function get(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else {
    return 'c';
  }
} //이건 함수 선언식이자 표현식
 // 런타임 이전에 메모리 공간을 확보해둠 호이스팅 이전에 먼저 동작함. 함수가 정의되기 전에 함수를 호출할 수 있다.

var haeun = function(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else {
    return 'c';
  }
}; //이건 함수 표현식

// 함수 표현식은 호이스팅 되지 않고 함수선언된 함수는 호이스팅(런타임 이전에 먼저 선언, 메모리 공간 확보) 된다.
