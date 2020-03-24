const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function getValues(key) {
  // return todos.map(todo => todo[key]);

  let arr = [];
  function map () {
    for (let i = 0; i < todos.length; i++) {
      // if (todos[i][key] === todos[i][key]) { if 문 쓸데없는 뻘짓이었다.
      arr.push(todos[i][key]);
      // }
    }
  }
  map();
  return arr;
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
console.log(getValues('completed')); // [ false, true, false ]