
const step1 = func => {
  func(2); // value1 = 2;
};
const step2 = (value1, func2) => {
  const sum = value1 - func2(5); // value2 = 5; func2(5) = 6;
  console.log(sum); // -4
};


step1(function (value1) {
  step2(value1, function (value2) { // value1 = 2; value2 = 5;
    return value2 + 1;
  });
});


/*
1. step1 이라는 함수를 호출한다.
2. step1 이라고 정의되어있는 함수를 실행한다.
3. step1 함수를 실행하면서 func이란 함수를 호출한다. 이때 value1은 2다.
4. func이란 함수는 step1(여기) 안에 써져있는 콜백 함수이다. 이게 실행된다.
5. 콜백함수가 실행되면서 콜백함수 실행문에 있는 step2함수를 호출한다.
6. step2함수를 호출했으니 step2안에 들어있는 func2함수를 호출한다. 
7. 이때 func2는 step2함수를 호출문의 두번째 인수자리에 있는 두번째 콜백함수이다. value2는 5다.
8. 두번째 콜백함수를 실행하고 리턴값이 6으로 평가 된다.
9. step2함수의 실행문이 실행되며 value1 - func2(5);의 결과가 sum에 할당되고 콘솔창에 -4가 찍힌다.

참고로 step1과 step2함수는 각자 따로 다른용도로 재사용 가능하다.
이를 의사코드로 표현하면 아래와 같다.
*/


const _step1 = () => {

  // 2~3. 1차 콜백함수 func 실행
  const value1 = 2;
  // 3~6. 2차 콜백함수 fun2 실행
  const value2 = 5;
  const sum = value1 - (value2 + 1);
  console.log(sum); // -4
  
};

_step1();




// 번외 콜백함수 클로저 활용

const $step1 = func => {
  return func(2); // value1 = 2;
};
const $step2 = (value1, func2) => {
  return value1 + func2(4); // value2 = 4; 
};


const result = $step1(function (value1) {
  return $step2(value1, function (value2) { // value1 = 2;
    const sum = value2 + 1;
    return sum; // sum은 클로저다
  });
});

console.log(result); // 7


