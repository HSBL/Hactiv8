function bubbleSort(arr) {
  //...
  var done = false;
  while (!done) {
    var swapping = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
        swapping = true;
      }
    }
    if (!swapping) {
      done = true;
    }
  }
  return arr;
}

console.log(bubbleSort([9, 2, 1, 4, 4, 4, 20]));
