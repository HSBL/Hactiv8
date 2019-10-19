function hapusSimbol(str) {
  // you can only write your code here!
  // LOOPING WITH REGEX TEST
  //   var result = "",
  //     regexPattern = new RegExp("[0-9A-z]");
  //   for (let i = 0; i < str.length; i++) {
  //     if (regexPattern.test(str[i])) {
  //       result += str[i];
  //     }
  //   }
  //   return result;

  // REGEX REPLACE
  return str.replace(/[^0-9A-z]/g, "");
}

// TEST CASES
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
