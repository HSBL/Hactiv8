function insertSort(arr) {
  //...
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      continue;
    } else {
      var swap = arr[i];
      var j = i - 1;
      while (arr[j] > swap && j >= 0) {
        arr[j + 1] = arr[j];
        j--;
        // console.log(arr);
      }
      arr[j + 1] = swap;
      //   console.log(arr);
    }
  }
  return arr;
}

console.log(insertSort([2, 3, 8, 9, 4]));
console.log(insertSort([3, 2, 5, 1, 8, 4]));
console.log(insertSort([7, 8, 5, 2, 4, 6, 3]));
