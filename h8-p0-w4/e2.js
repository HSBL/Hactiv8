function fpb(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < 1 || angka2 < 1) {
    return "input must be positive integers";
  }
  var faktor1 = [],
    faktor2 = [];
  for (let i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      faktor1.push(i);
    }
  }
  for (let i = 1; i <= angka2; i++) {
    if (angka2 % i === 0) {
      faktor2.push(i);
    }
  }
  for (let i = faktor1.length - 1; i >= 0; i--) {
    for (let j = faktor2.length - 1; j >= 0; j--) {
      if (faktor2[j] === faktor1[i]) {
        return faktor1[i];
      }
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
