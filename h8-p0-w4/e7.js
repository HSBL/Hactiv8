function urutkanAbjad(str) {
  // you can only write your code here!
  // METHOD 1 USING BUILT IN
  //   return str
  //     .split("")
  //     .sort()
  //     .join("");

  // METHOD 2 MANUAL
  var arr = [];
  for (let i = 0; i < str.length; i++) {
    // SPLIT
    arr[i] = str[i];
  }
  for (let i = 0; i < arr.length; i++) {
    // SORT
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  var result = ""; // JOIN
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
