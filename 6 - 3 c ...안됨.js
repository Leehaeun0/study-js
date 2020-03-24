let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function toggleCompletedById(id) {
  todos.forEach( todo => {
    todos = todo.id === id ? { ...todo, ...{ completed: false } } : todos; // 객체를 풀때 객체 안에서 풀면 됌
    todos = todo.id === id ? [...todo, ...{ completed: false }] : todos; // 객체를 풀때 배열 안에서 풀면 안됌 왜?
  });
}

console.log(toggleCompletedById(2));

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