const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function render() {

  todos.forEach(function (todo) {
    console.log(todo);
    console.log(`${todo}`);
  });

}

console.log(render());

// 왜 다른가?
// { id: 3, content: 'HTML', completed: false }
// [object Object]
// { id: 2, content: 'CSS', completed: true }
// [object Object]
// { id: 1, content: 'Javascript', completed: false }
// [object Object]
// undefined