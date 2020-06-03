const promiseGet = () => {
   Promise((resolve, reject) => {
  const get = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
  
    xhr.onload = () => {
    // xhr.onload = // () => {
  
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.response));
  
  
      } else {
        console.error('Error', xhr.status, xhr.statusText); // 이건 콘솔로 찍은거지 에러처리가 아니다.
      }
    };// 여기까지 에러발생하면 부모인 get으로 전파가 안된다.에러캐치 못한다. get에 트라이캐치 문법 못쓴다.
  };
});
};