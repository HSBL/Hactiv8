function cariModus(arr) {
  // you can only write your code here!
  if (arr.length < 1) {
    // check input
    return "invalid input";
  }
  var multiD = [];
  // buat arry multi dimensi dengan item arr[i]
  for (let i = 0; i < arr.length; i++) {
    var inside = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        inside.push(arr[j]);
      }
    }
    multiD.push(inside);
  }

  // sort berdasarkan length;
  for (let i = 0; i < multiD.length; i++) {
    for (let j = i + 1; j < multiD.length; j++) {
      if (multiD[i].length < multiD[j].length) {
        var swap = multiD[i];
        multiD[i] = multiD[j];
        multiD[j] = swap;
      }
    }
  }
  // check hasil
  if (multiD[0].length === 1 || multiD[0].length === arr.length) {
    return -1;
  }
  // return
  return multiD[0][0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
