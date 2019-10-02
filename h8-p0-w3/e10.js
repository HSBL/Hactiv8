function perkalianUnik(arr) {
  //   you can only write your code here!
  //   METHOD 1
  if (arr.length > 2) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
      var sum = 1;
      for (let j = 0; j < arr.length; j++) {
        if (i === j) {
          continue;
        } else {
          sum *= arr[j];
        }
      }
      result.push(sum);
    }
    return isNaN(result[0]) ? "input not valid" : result;
  } else if (arr.length < 3) {
    return arr;
  } else {
    return "input not valid";
  }
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
