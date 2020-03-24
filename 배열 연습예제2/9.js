let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function getMaxId() {
  return todos.length ? Math.max(...todos.map( todo => todo.id )) : 0;
}

console.log(getMaxId()); // 3
