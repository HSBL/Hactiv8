function targetTerdekat(arr) {
  // you can only write your code here!
  if (arr.indexOf("x") === -1 || arr.indexOf("o") === -1) {
    return 0;
  } else {
    var arrIndexO = [],
      arrIndexX = []; // should handle multiple xs or os
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "o") {
        arrIndexO.push(i);
      } else if (arr[i] === "x") {
        arrIndexX.push(i);
      }
    }
    var range = [];
    for (let i = 0; i < arrIndexX.length; i++) {
      for (let j = 0; j < arrIndexO.length; j++) {
        range.push(Math.abs(arrIndexO[j] - arrIndexX[i]));
      }
    }
  }
  return Math.min(...range);
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
