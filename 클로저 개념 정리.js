const $increase = document.querySelector('.increase');
const $decrease = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const counter = (() => {
  let value = 0;
  return {
    increase() {
      value += 1; 
      // value는 상위 스코프의 변수를 참조하고 있고 그것의 값을 변경하고 있다.
      // value라는 변수가 등록된 스코프는 increse함수 내부가 아님을 명심하자.
      $counter.textContent = value;
    },
    decrease() {
      value -= 1;
      $counter.textContent = value;
    }
  };
})();

$increase.onclick = () => {
  counter.increase();
};

$decrease.onclick = () => {
  if ($counter.textContent === '0') return;
  counter.decrease();
};




const $counter = document.querySelector('.counter');
const $increase = document.querySelector('.increase');
const $decrease = document.querySelector('.decrease');

const setCounter = (() => {
  let count = 0;

  return {
    increase() { $counter.innerText = ++count; },

    decrease() {
      if (count === 0) return;
      $counter.innerText = --count;
    }
  };
})();

$increase.onclick = setCounter.increase; // 이벤트 함수의 값 자리에 등록되는 것은 함수호출문이 아니라 함수 정의문 즉 함수 정의를 참조하는 함수이름 그 자체도 올수 있음을 명심하자
$decrease.onclick = setCounter.decrease;




const $increaseBtn = document.querySelector('.increase');
const $decreaseBtn = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');


const closure = (() => {

  let count = 0; // 안의 함수의 리턴값을 통해 계속 재할당 되는 값

  return function (countFunc) {

    count = countFunc(count); // 여기서는 카운트 변수가 내부함수 스코프에 할당되어있고 이 카운트가 리턴을 통해 외부함수의 카운트변수에 재할당을 하는 것이다.
    return count;
  };
})();

const increase = cnt => {
  return ++cnt;
};

const decrease = cnt => {
  return --cnt;
};

$increaseBtn.onclick = () => {
  $counter.innerHTML = closure(increase);
};

$decreaseBtn.onclick = () => {
  if ($counter.textContent < 1) return;
  $counter.innerHTML = closure(decrease);
};
