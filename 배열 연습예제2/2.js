const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function getValues(key) {
  return todos.map(todo => todo[key]);

  /* map함수를 for문으로 만들었을 경우
  const arr = [];
  return (function map() {
    for (let i = 0; i < todos.length; i++) {
      arr.push(todos[i][key]);
    }
    return arr;
  }());
  추가적으로 map 함수에는 함수를 전달하는 매개변수가 있을거고, 또 map 함수 내부에 그 함수를 호출하는 함수호출도 있을거다. + 매개변수로 들어가는 함수선언문이 map 함수 내부에 정의되어 있을거다(?)
  */

}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
console.log(getValues('completed')); // [ false, true, false ]