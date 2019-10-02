function pasanganTerbesar(num) {
  // you can only write your code here!
  if (typeof num === "number" && num > 9) {
    var strNum = num.toString();
    var biggest = Number(strNum[0] + strNum[1]);
    for (let i = 1; i < strNum.length; i++) {
      if (Number(strNum[i] + strNum[i + 1]) > biggest) {
        biggest = Number(strNum[i] + strNum[i + 1]);
      }
    }
    return biggest;
  } else {
    return "input not valid";
  }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
