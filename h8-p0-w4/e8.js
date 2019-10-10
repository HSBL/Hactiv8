function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  // MANUAL
  var lower = "abcdefghijklmnopqrstuvwxyz",
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    result = "";
  for (let i = 0; i < kalimat.length; i++) {
    var lowercase = false,
      index = null,
      uppercase = false;
    for (let j = 0; j < lower.length; j++) {
      // is it lowercase?
      if (lower[j] === kalimat[i]) {
        index = j;
        lowercase = true;
      }
    }
    if (lowercase) {
      result += upper[index];
    }
    for (let j = 0; j < upper.length; j++) {
      // is it uppercase?
      if (upper[j] === kalimat[i]) {
        index = j;
        uppercase = true;
      }
    }
    if (uppercase) {
      result += lower[index];
    }
    if (!uppercase && !lowercase) {
      // is it neither?
      result += kalimat[i];
    }
  }
  return result;

  // BUILT IN ASCII
  // var result = "";
  // for (let i = 0; i < kalimat.length; i++) {
  //   if (kalimat[i].charCodeAt(0) >= 65 && kalimat[i].charCodeAt(0) <= 90) {
  //     result += String.fromCharCode(kalimat[i].charCodeAt(0) + 32);
  //   } else if (
  //     kalimat[i].charCodeAt(0) >= 97 &&
  //     kalimat[i].charCodeAt(0) <= 122
  //   ) {
  //     result += String.fromCharCode(kalimat[i].charCodeAt(0) - 32);
  //   } else {
  //     result += kalimat[i];
  //   }
  // }
  // return result;

  // BUILT IN FN
  // var result = "";
  // for (let i = 0; i < kalimat.length; i++) {
  //   if (kalimat[i] === kalimat[i].toUpperCase()) {
  //     result += kalimat[i].toLowerCase();
  //   } else {
  //     result += kalimat[i].toUpperCase();
  //   }
  // }
  // return result;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
