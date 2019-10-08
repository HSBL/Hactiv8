function ubahHuruf(kata) {
  // you can only write your code here!
  var letter = "abcdefghijklmnopqrstuvwxyza",
    result = "";
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < letter.length; j++) {
      if (kata[i] === letter[j]) {
        result += letter[j + 1];
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
