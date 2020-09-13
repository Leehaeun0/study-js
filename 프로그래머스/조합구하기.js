const getMiddle = (num, order, i) => {
  let middleMenu = "";
  for (let k = 0; k < num; k++) {
    middleMenu += order[i + 1 + k];
  }
  return middleMenu;
};

function solution(orders, course) {
  let combinations = {};
  let answerArr = [];

  course.forEach((courseNum) => {
    combinations = { ...combinations, [courseNum]: [] };
    orders.forEach((order) => {
      const orderArr = order.split("");
      orderArr.forEach((menu1, i) => {
        orderArr.forEach((menu2, j) => {
          if (j <= i) return;
          const num = courseNum - 2;
          if (j + num >= order.length) return;
          const combination = menu1 + getMiddle(num, order, i) + order[j + num];
          const combinationArr = combinations[courseNum];
          if (combinationArr.some((v) => v.name === combination)) {
            combinations = {
              ...combinations,
              [courseNum]: combinationArr.map((v) =>
                v.name === combination ? { ...v, count: v.count + 1 } : v
              ),
            };
            return;
          }
          combinations[courseNum].push({ name: combination, count: 1 });
        });
      });
    });

    console.log(combinations);

    let maxCount = 1;
    let maxCountCombinations = [];
    combinations[courseNum].forEach((v) => {
      if (!v || v.count === 1) return;
      if (v.count === maxCount) {
        maxCountCombinations.push(v.name);
      }
      if (v.count > maxCount) {
        maxCount = v.count;
        maxCountCombinations = [v.name];
      }
    });
    maxCountCombinations.forEach((v) => answerArr.push(v));
  });

  return answerArr.sort();
}

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
