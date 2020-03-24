let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function toggleCompletedAll() {
  // todos.map( todo => todo.completed = false);

  // todos.map( todo => {
  //   todo.completed = todo.completed && false;
  // });

  todos = todos.map( todo => ({ ...todo, completed: true }));
  // 그룹연산자로 묶기 전까지는 {}를 블록문이 와야하는 자리라고 인식할 뿐, 객체리터럴로 평가 하지 않는다.
  // 그룹연산자 안에는 값이 와야 하는 자리라서 {} 가 객체 리터럴로 평가된다.
}

toggleCompletedAll();

console.log(todos);

/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/