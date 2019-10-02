/*
==========
Balance XY
==========

Buatlah function xyBalance yang menerima input berupa string str dan
mengembalikan true jika setelah string x ada y di dalam string tersebut.
Satu 'y' bisa menutup lebih dari satu x.

Contoh Output dan Penjelasan:
xyBalance("aaxbby") → true, karena setelah x pada index ke 2 ada y di index 5
xyBalance("aaxbb") → false, karena setelah x tidak ada y di dalam string tersebut
xyBalance("yaaxbb") → false, karena setelah x pada posisi 3, tidak ada y di dalam string
xyBalance("bxacdexby") -> true, karena setelah x pada posisi 1 dan 6, ada y pada index terakhir
xyBalance("cnxbyuxi") ->false, karena tidak ada y yang menutupi x pada index 6

*/
function xyBalance(str) {
  // Write your code here
  // METHOD 1
  if (str.indexOf("x") === -1 || str.indexOf("y") === -1) {
    return false;
  }
  return str.substr(str.lastIndexOf("x")).indexOf("y") !== -1;
}
console.log(xyBalance("aaxbby")); //true
console.log(xyBalance("aaxbb")); //false
console.log(xyBalance("yaaxbb")); //false
console.log(xyBalance("bxacdexby")); //true
console.log(xyBalance("cnxbyuxi")); //false
