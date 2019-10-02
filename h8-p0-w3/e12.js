function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  if (arr.length < 2 || typeof arr === typeof "" || typeof arr !== typeof []) {
    return "input not valid";
  } else if (arr.length === 2) {
    return true;
  } else {
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i + 1] / arr[i] !== arr[i + 2] / arr[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

console.log(tentukanDeretGeometri(true)); //
