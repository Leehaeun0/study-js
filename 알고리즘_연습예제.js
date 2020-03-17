function bubbleSort(array) {
  for (let i = 0; i < array.length - 1 ; i++) {
    for (let n = array.length - 1; n > 0; n--) {
      console.log(array[i],array[n]);
    }
  }

}




// console.log(bubbleSort([2,4,5,1,3])); // [1,2,3,4,5]
console.log(bubbleSort([5,2,1,3,4,6])); // [1,2,3,4,5,6]
// console.log(bubbleSort([3,1,0,-1,4,2])); // [-1,0,1,2,3,4]