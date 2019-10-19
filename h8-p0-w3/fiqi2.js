function bintang(num) {
  for (let i = 0; i < num; i++) {
    var temp = "";
    // bikin spasi
    for (j = 0; j < num - 1 - i; j++) {
      temp += "-";
    }
    // bikin bintang
    for (let j = 0; j < 2 * i + 1; j++) {
      temp += "*";
    }
    // console log
    console.log(temp);
  }
}

// bintang(1);
// bintang(2);
bintang(3);
// bintang(4);
// bintang(5);
