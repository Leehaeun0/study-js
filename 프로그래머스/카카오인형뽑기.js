function solution(board, moves) {
  let resultArr = [];
  let countDelete = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // console.log('board', board[j], 'moves', moves[i]);
      // console.log(board[j][moves[i] - 1])

      if (!board[j][moves[i] - 1]) continue;
      const item = board[j][moves[i] - 1];
      // console.log(resultArr[resultArr.length - 1]);
      if (item === resultArr[resultArr.length - 1]) {
        resultArr.pop();
        board[j][moves[i] - 1] = 0;
        countDelete += 2;
        break;
      }
      resultArr.push(item);
      board[j][moves[i] - 1] = 0;
      break;
    }
  }
  // console.log('result', resultArr);
  // console.log(countDelete);
  return countDelete;
}
