/*
==============
Square Number
==============
Instruksi
=========
Buatlah sebuah function bernama squareNumber yang menjalankan proses dengan 
menggunakan looping (boleh dengan while atau for) dan menerima dua parameter 
bernama num dan sort.
Buatlah sebuah angka dengan pola pemunculan sesuai dengan parameter yang diberikan:
contoh 1 (squareNumber(3, ascending)):
1 2 3
4 5 6
7 8 9

contoh 2 (squareNumber(3, descending)):
9 8 7
6 5 4
3 2 1

contoh 3 (squareNumber(1, ascending)):
1

Note: Output harus sesuai dengan contoh yang diberikan!
*/

function squareNumber(num, sort) {
  // Write your code here
  // METHOD 1
  // if (sort === "ascending") {
  //   var angka = 1;
  //   for (let i = 0; i < num; i++) {
  //     var str = "";
  //     for (let j = 0; j < num; j++) {
  //       str += angka + j + i * num + " ";
  //     }
  //     console.log(str);
  //   }
  // } else if (sort === "descending") {
  //   //var angka = Math.pow(num, 2);
  //   var angka = num * num;
  //   for (let i = 0; i < num; i++) {
  //     var str = "";
  //     for (let j = 0; j < num; j++) {
  //       str += angka - j - i * num + " ";
  //     }
  //     console.log(str);
  //   }
  // } else {
  //   return "ascending or descending?";
  // }

  // METHOD 2, without nested loop.
  if (isNaN(num)) {
    console.log("need to enter number");
  } else {
    if (sort === "ascending") {
      // do if ascending
      var string = "";
      for (let i = 1; i <= num * num; i++) {
        string += i + " ";
        if (i % num === 0) {
          console.log(string);
          string = "";
        }
      }
    } else if (sort === "descending") {
      // do if descending
      var string = "";
      for (let i = num * num; i >= 1; i--) {
        string += i + " ";
        if ((i - 1) % num === 0) {
          console.log(string);
          string = "";
        }
      }
    } else {
      console.log("ascending or descending?");
    }
  }
}

squareNumber(4, "ascending");
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

squareNumber(6, "descending");
// 36 35 34 33 32 31
// 30 29 28 27 26 25
// 24 23 22 21 20 19
// 18 17 16 15 14 13
// 12 11 10 9 8 7
// 6 5 4 3 2 1
