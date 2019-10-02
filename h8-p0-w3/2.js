/**
 * ==========
 * Snake Eyes
 * ==========
 *
 * [Instruction]
 * 1. Buatlah program yang akan menjumlahkan nilai yang keluar dari 2 buah dadu dengan nilai 1-6
 * 2. Jika nilai dadu sama maka nilai salah satunya bertambah 1
 * 3. Namun jika nilai dadu yang ditambah jadi bernilai > 6 maka dadu tersebut nilainya menjadi 1
 * 4. Jika kedua dadu bernilai 6 maka yang dirubah menjadi 1 hanya salah satunya saja
 *
 * [Example]
 * 1.
 * var dadu1 = 3
 * var dadu2 = 5
 * @output = 8
 *
 * 2.
 * var dadu1 = 6
 * var dadu2 = 6
 * => karena nilai sama dan keduanya bernilai 6, maka salah satu dadunya menjadi 1
 * @output = 7
 */

var dadu1 = 5;
var dadu2 = 5;
// Write your code here

// METHOD 1

if (dadu1 === 6 && dadu2 ===6) {
    dadu1 = 1;
} else if( dadu2 === dadu1) {
    dadu1++;
}
console.log(dadu1 + dadu2);


// METHOD 2
// const result = (x, y) => {
//   (x + y === 12) ? 7 : x + y;
// };

// console.log(result(dadu1, dadu2));
