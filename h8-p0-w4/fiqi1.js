function knight(arr) {
  //...
  // METODE POSITIF, works tapi pake ngecek di luar scoop.
  /* 
  // simpan index kuda
  var indexI = null,
    indexJ = null,
    cariMakan = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1]
    ]; // cari makan adalah koordinat yang bisa dimakan kuda

  // cari koordinat kuda simpad di indexI dan indexJ
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === "K") {
        indexI = i;
        indexJ = j;
      }
    }
  }
  var termakan = []; // siapin var buat yang nanti termakan
  // loop area yang bisa dimakan kuda
  for (let i = 0; i < cariMakan.length; i++) {
    if (
      arr[indexI + cariMakan[i][0]][indexJ + cariMakan[i][1]] === "P" ||
      arr[indexI + cariMakan[i][0]][indexJ + cariMakan[i][1]] === "R" ||
      arr[indexI + cariMakan[i][0]][indexJ + cariMakan[i][1]] === "B" ||
      arr[indexI + cariMakan[i][0]][indexJ + cariMakan[i][1]] === "M"
    ) {
      termakan.push(arr[indexI + cariMakan[i][0]][indexJ + cariMakan[i][1]]); // push ke array termakan
      arr[indexI + cariMakan[i][0]][indexJ + cariMakan[i][1]] = "X"; // ganti jadi "X"
    }
  }
  // menyiapkan string hasil
  var report = "Kuda bisa makan";
  if (termakan.length < 1) {
    report = "Kuda tidak bisa makan apa apa";
  }

  for (let i = 0; i < termakan.length; i++) {
    if (termakan[i] === "R") {
      report += " Ratu";
    } else if (termakan[i] === "P") {
      report += " Pion";
    }
  }
  console.log(report);
  return arr;
  */

  // METHODE FALSE POSITIVE
  /*
1. Temukan posisi kuda
    a. siapkan variable indek i dan j
    b. loop array untuk menemukan "K"
2. Lokasi yang bisa dimakan
    a. loop array jangkauan kuda, di tambah index i dan j
    b. hapus yang jangkauan di luar board
3. Apakah ada makanan disana
    a. loop array jangkauan kuda, kalau ada isinya, di push ke array termakan, diganti "X"
4. Lapor
*/
  // 1. a
  var indexI = null,
    indexJ = null,
    cariMakan = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1]
    ]; // cari makan adalah koordinat yang bisa dimakan kuda

  // 1. b cari koordinat kuda simpad di indexI dan indexJ
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === "K") {
        indexI = i;
        indexJ = j;
      }
    }
  }
  // 2. a siapin array yang kemungkinan bisa dimakan (di luar board ikut)
  var mungkinBisaMakan = [];
  for (let i = 0; i < cariMakan.length; i++) {
    mungkinBisaMakan.push([cariMakan[i][0] + indexI, cariMakan[i][1] + indexJ]);
  }
  // 2. b siapin array yang bisa dimakan (di luar board ga ikut)
  var mungkinBangetBisaMakan = [];
  for (let i = 0; i < mungkinBisaMakan.length; i++) {
    if (
      mungkinBisaMakan[i][0] < 0 ||
      mungkinBisaMakan[i][0] > 7 ||
      mungkinBisaMakan[i][1] < 0 ||
      mungkinBisaMakan[i][1] > 7
    ) {
      continue;
    } else {
      mungkinBangetBisaMakan.push(mungkinBisaMakan[i]);
    }
  }
  // 3. a
  var termakan = []; // siapin var buat yang nanti termakan
  // loop area yang bisa dimakan kuda
  for (let i = 0; i < mungkinBangetBisaMakan.length; i++) {
    if (
      arr[mungkinBangetBisaMakan[i][0]][mungkinBangetBisaMakan[i][1]] !== " "
    ) {
      termakan.push(
        arr[mungkinBangetBisaMakan[i][0]][mungkinBangetBisaMakan[i][1]]
      ); // push ke array termakan
      arr[mungkinBangetBisaMakan[i][0]][mungkinBangetBisaMakan[i][1]] = "X"; // ganti jadi "X"
    }
  }
  // 4. lapor
  // menyiapkan string hasil
  var report = "Kuda bisa makan";
  if (termakan.length < 1) {
    report = "Kuda tidak bisa makan apa apa";
  }

  for (let i = 0; i < termakan.length; i++) {
    if (termakan[i] === "R") {
      report += " Ratu";
    } else if (termakan[i] === "P") {
      report += " Pion";
    }
  }
  console.log(report);
  return arr;
}

var testCase1 = [
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "P", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "K", " ", " ", " ", " "],
  [" ", "R", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "]
];
console.log(knight(testCase1));

var testCase2 = [
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "P", " ", " ", " "],
  ["K", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "R", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "]
];
console.log(knight(testCase2));
