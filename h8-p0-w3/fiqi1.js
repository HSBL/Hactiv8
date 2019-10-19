/*
  STRSPLIT
  ========
  Buatlah sebuah fungsi strSplit dengan inputan sebuah kata dan sebuah splitter. Input kata adalah kata yang akan di split, dan input splitter adalah pemisah nya. Output adalah array yang berisi hasil dari pemecahan kata berdasarkan splitter nya.
  Syarat-syaratnya adalah sebagai berikut :
  1. Hanya boleh memakai built in function push
  2. Jika inputan kata kosong, maka tampilkan '', APAPUN input splitter nya
  3. Jika splitter kosong, maka tampilkan input kata apa adanya
  4. Jika kata dan splitter kosong, ikuti aturan nomer 2
*/

function strSplit(kata, splitter) {
  // put your code here
  if (kata === "") {
    return "";
  } else if (splitter === "") {
    return [kata];
  }
  var arrKata = [],
    temp = "";
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === splitter) {
      arrKata.push(temp);
      temp = "";
    } else {
      temp += kata[i];
    }
  }
  arrKata.push(temp);
  return arrKata;
}

// CONTOH KASUS :
console.log(strSplit("", "")); // ''
console.log(strSplit("", "/")); // ''
console.log(strSplit("ini adalah aku", " ")); // [ 'ini' , 'adalah' , 'aku' ]
console.log(strSplit("siapa ya", "")); // [ 'siapa ya' ]
console.log(strSplit("12/02/1982", "/")); // [ '12', '02', '1982' ]
