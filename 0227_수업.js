const _ = require()

console.log();

var o = {
    a : 1,
    b: {
        c: 1
    }
};

const c = _.cloneDeep(o);
console.log(c); 
console.log(o.b === c.b);


// 배열 map고차함수 예제
console.log([1, 2, 3, 4, 5].map(function(v) {
    return v * 10;
  }));
