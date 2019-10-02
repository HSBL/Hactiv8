function angkaPalindrome(num) {
  // you can only write your code here!
  var done = false;
  while (!done) {
    num++;
    var strNum = num.toString();
    var palinCheck = true;
    for (let i = 0; i < strNum.length / 2; i++) {
      if (strNum[i] !== strNum[strNum.length - 1 - i]) {
        palinCheck = false;
      }
    }
    if (palinCheck) {
      done = true;
    }
  }
  return num;

  // METHOD 2
  //   if (typeof num !== "number") {
  //     return "only accept number";
  //   }
  //   num++;
  //   while (
  //     num
  //       .toString()
  //       .split("")
  //       .reverse()
  //       .join("") !== num.toString()
  //   ) {
  //     num++;
  //   }
  //   return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
