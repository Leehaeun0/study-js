const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

function sortBy(key) {
  let copy = todos.slice();
  // copy[0].id = 5; // slice 메소드는 얕은 복사라서 얕은 복사한 객체 안의 객체를 바꾸면 원본 객체도 바뀐다. 깊은 복사를 하려면 lodash의 deepClone을 이용하라
  return copy.sort((a, b) => {
    return (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)); // 줄바꿈을 하면 앞에 return을 꼭 명시할 것.
  });
}

console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/
console.log(todos);