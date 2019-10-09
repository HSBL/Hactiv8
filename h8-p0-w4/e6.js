function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  // CHECK INPUT
  if (angka.toString().length === 1) {
    return 2;
  } else if (angka < 0) {
    return "input not valid";
  }

  // MAIN LOGIC
  var perkalian = []; // array digit perkalian
  for (let i = 1; i < angka; i++) {
    if (angka % i === 0) {
      perkalian.push("" + i + angka / i);
    }
  }
  // cari digit terendah dengan array.length
  var digitPerkalian = perkalian[0].length;
  for (let i = 0; i < perkalian.length; i++) {
    if (perkalian[i].length < digitPerkalian) {
      digitPerkalian = perkalian[i].length;
    }
  }
  return digitPerkalian;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
