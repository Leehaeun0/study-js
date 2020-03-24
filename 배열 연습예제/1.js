const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function render() {
  let html = '';

  /* 일반 함수
  todos.forEach(function (todo) {
    html += `<li id="${todo.id}">
    <label><input type="checkbox"${todo.completed ? ' cheked' : ''}>${todo.content}</label>
  </li>`;
  });
  */

  todos.forEach(todo => {
    html += `<li id="${todo.id}">
    <label><input type="checkbox"${todo.completed ? ' cheked' : ''}>${todo.content}</label>
  </li>`;
  });

  return html;
}

console.log(render());

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
