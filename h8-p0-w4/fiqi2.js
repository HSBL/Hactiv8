function knight(arr) {
  /*
  1. Temukan posisi kuda
      a. siapkan variable koodinat kuda
      b. loop array untuk menemukan "K"
  2. Lokasi yang bisa dimakan
      a. loop array jangkauan kuda, di tambah index i dan j
      b. hapus yang jangkauan di luar board
  3. Apakah ada makanan disana
      a. loop array jangkauan kuda, kalau ada isinya, di push ke array termakan, diganti "X"
  4. Lapor
  */
  // 1. a
  var kuda = [];
  // 1. b cari koordinat kuda
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === "K") {
        kuda[0] = i;
        kuda[1] = j;
      }
    }
  }
  // array of location langkah
  // langkah peratma
  var mungkinBangetBisaMakan = step([], [kuda]);
  // langkah kedua
  var mungkinBangetBisaMakan2 = step([kuda], mungkinBangetBisaMakan);
  // langkah ketiga
  var mungkinBangetBisaMakan3 = step(
    mungkinBangetBisaMakan,
    mungkinBangetBisaMakan2
  );

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
  var termakan2 = [];
  for (let i = 0; i < mungkinBangetBisaMakan2.length; i++) {
    if (
      arr[mungkinBangetBisaMakan2[i][0]][mungkinBangetBisaMakan2[i][1]] !== " "
    ) {
      termakan2.push(
        arr[mungkinBangetBisaMakan2[i][0]][mungkinBangetBisaMakan2[i][1]]
      ); // push ke array termakan
      arr[mungkinBangetBisaMakan2[i][0]][mungkinBangetBisaMakan2[i][1]] = "X"; // ganti jadi "X"
    }
  }

  var termakan3 = [];
  for (let i = 0; i < mungkinBangetBisaMakan3.length; i++) {
    if (
      arr[mungkinBangetBisaMakan3[i][0]][mungkinBangetBisaMakan3[i][1]] !== " "
    ) {
      termakan3.push(
        arr[mungkinBangetBisaMakan3[i][0]][mungkinBangetBisaMakan3[i][1]]
      ); // push ke array termakan
      arr[mungkinBangetBisaMakan3[i][0]][mungkinBangetBisaMakan3[i][1]] = "X"; // ganti jadi "X"
    }
  }
  // 4. lapor
  // menyiapkan string hasil
  var report = "Kuda bisa makan",
    report2 = "pada step 2 bisa makan",
    report3 = "pada step 3 bisa makan";
  if (termakan.length < 1) {
    report = "Kuda tidak bisa makan apa apa";
  }
  if (termakan2.length < 1) {
    report2 = "Kuda tidak bisa makan apa apa pada langkah ke 2";
  }
  if (termakan3.length < 1) {
    report3 = "Kuda tidak bisa makan apa apa pada langkah ke 3";
  }
  for (let i = 0; i < termakan.length; i++) {
    if (termakan[i] === "R") {
      report += " Ratu";
    } else if (termakan[i] === "P") {
      report += " Pion";
    }
  }
  for (let i = 0; i < termakan2.length; i++) {
    if (termakan2[i] === "R") {
      report2 += " Ratu";
    } else if (termakan2[i] === "P") {
      report2 += " Pion";
    }
  }
  for (let i = 0; i < termakan3.length; i++) {
    if (termakan3[i] === "R") {
      report3 += " Ratu";
    } else if (termakan3[i] === "P") {
      report3 += " Pion";
    }
  }
  console.log(report + " di langkah pertama");
  console.log(report2);
  console.log(report3);
  return arr;
}

function step(arrDont, arrStart) {
  var nextStep = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1]
    ],
    next = [];
  for (let i = 0; i < arrStart.length; i++) {
    for (let j = 0; j < nextStep.length; j++) {
      next.push([
        arrStart[i][0] + nextStep[j][0],
        arrStart[i][1] + nextStep[j][1]
      ]);
    }
  }
  var minusRange = [];
  for (let i = 0; i < next.length; i++) {
    if (next[i][0] < 0 || next[i][0] > 7 || next[i][1] < 0 || next[i][1] > 7) {
      continue;
    } else {
      minusRange.push(next[i]);
    }
  }
  var minusDuplicate = [];
  for (let i = 0; i < minusRange.length; i++) {
    var uniq = true;
    for (let j = 0; j < minusDuplicate.length; j++) {
      if (i === j) {
        continue;
      } else if (
        minusRange[i][0] === minusDuplicate[j][0] &&
        minusRange[i][1] === minusDuplicate[j][1]
      ) {
        uniq = false;
      }
    }
    if (uniq) {
      minusDuplicate.push(minusRange[i]);
    }
  }
  var result = [];
  for (let i = 0; i < minusDuplicate.length; i++) {
    var dont = false;
    for (let j = 0; j < arrDont.length; j++) {
      if (
        minusDuplicate[i][0] === arrDont[j][0] &&
        minusDuplicate[i][1] === arrDont[j][1]
      ) {
        dont = true;
      }
    }
    if (!dont) {
      result.push(minusDuplicate[i]);
    }
  }
  return result;
}

var testCase1 = [
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "P", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "K", " ", " ", " ", " "],
  [" ", "R", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", "P"],
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
