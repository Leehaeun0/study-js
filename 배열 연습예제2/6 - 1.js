let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function toggleCompletedById(id) {
  return todos.map(todo => {
    // todo.completed = todo.id === id ? (todo.completed ? false : true) : todo.completed; // 이중 삼항 조건 연산자
    todo.completed = todo.id === id ? (todo.completed || true) : todo.completed; // 조건이 존재의 유무를 묻고 결과값이 불리언 값이면 논리연산자 사용 할 수 있다.
  });
}

toggleCompletedById(2);

console.log(todos);
// console.log(toggleCompletedById(2));

/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
// indexof 사용하는 방법은 없나?