const promise = () => {
  return new Promise((resolve, reject) => {
    reject(0);
  });
};
console.log(promise());
promise()
  .then((item) => console.log(item), (item) => 2) // 매개변수 item 은 Promise { <rejected> 0 } 인스턴스 객체다ㅣ
  .then((item2)=> console.log(item2));
