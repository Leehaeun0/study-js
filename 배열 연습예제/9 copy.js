let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

console.log(Math.max(...todos.map(todo => todo.id)));


// console.log(getMaxId()); // 3