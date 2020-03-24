let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];
// 스프레드 문법쓸때 const 로 선언한 배열은 바뀌지 않는다. const는 재할당 금지 변경불가능

function addTodo(newTodo) {
  // todos = [newTodo, ...todos];
  todos = [newTodo].concat(todos); // newTodo는 배열이 아니라서 배열로 감싸줘야 한다.
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/