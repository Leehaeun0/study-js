let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function toggleCompletedById(id) {
  todos.map( v => {
    if (v.id === id) {
      v.completed = !v.completed; // 객체를 직접 고친다. todos가 뮤테이터 변경할수 있는 객체로 사용한 것이기 때문에 비추천
    }
  });
}

toggleCompletedById(3);

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