function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  if (typeof kalimat === "string" && kalimat) {
    // check if input is string and not empty
    kalimat = kalimat.trim(); //remove white space
    // MAIN LOGIC
    var counter = 1;
    for (let i = 0; i < kalimat.length; i++) {
      if (kalimat[i] === " ") {
        counter++;
      }
    }
    return counter;
  } else {
    return "input not valid";
  }

  // METHOD 2
  //   return kalimat.split(" ").length;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5