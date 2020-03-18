console.log(function res() {
  var a = 3;
  var b = 5;
  return a * b;
}); // [Function: res]

console.log(function () {
  var a = 3;
  var b = 5;
  return a * b;
}()); // 15
// 함수 그 자체를 찍는것과 함수의 호출결과 리턴값을 찍는 것은 다르다.


var quick = function () {
  var a = 3;
  var b = 4;
  return a * b;
}
quick();

(function quick() {
  var a = 3;
  var b = 4;
  return a * b;
})();
// 위의 함수 리터럴 값이 그대로 원래 quick이 있던 자리로 옮긴게 즉시실행 함수이다.
// () 그룹연산자로 함수를 값이오는 자리에 넣어서 함수 리터럴이라는 함수객체를 생성한다. 그후 함수객체에 () 호출을 붙이면 함수 호출문이 된다.
// 즉시 실행함수는 호출과 정의를 동시에 하는 것이다.
// 위의 함수 표현식 정의 후 호출하는 방법은 quick 이라는 식별자가 전역 변수가 됨으로 다른곳에서 quick을 사용하면 함수 내용이 변경 될 수가 있다. (객체는 immutable값)
// 하지만 밑의 즉시실행 함수는 함수 리터럴임으로 함수이름을 함수 밖에서 참조할 수 없어서 안전하다. 이름을 그냥 생략할 수 있고 이름이 있어도 함수 내부에서 재귀함수 할떄나 쓰인다. 