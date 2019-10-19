function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if (angka < 10) {
    return angka;
  } else {
    // LOOPING METHOD
    // var string = angka.toString(),
    //   sum = 1;
    // for (let i = 0; i < string.length; i++) {
    //   sum *= Number(string[i]);
    // }
    // return kaliTerusRekursif(sum);

    // MODULAR REKURSIVE METHOD
    return kaliTerusRekursif(kaliRekursif(angka));
  }
}

function kaliRekursif(num) {
  if (num < 10) {
    return num;
  } else {
    return num.toString()[0] * kaliRekursif(num.toString().substr(1));
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
