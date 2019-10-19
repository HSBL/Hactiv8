function caesarSays(str, num) {
  // METHOD 1
  var arrOrigin = [],
    arrNum = [],
    cesarNum = [],
    cesarResult = [];
  for (let i = 0; i < str.length; i++) {
    arrOrigin.push(str.charCodeAt(i));
  }
  for (let i = 0; i < arrOrigin.length; i++) {
    if (arrOrigin[i] === 32) {
      arrNum.push(32);
    } else {
      arrNum.push(arrOrigin[i] - 97);
    }
  }
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 32) {
      cesarNum.push(32);
    } else {
      cesarNum.push((arrNum[i] + num) % 26);
    }
  }
  for (let i = 0; i < cesarNum.length; i++) {
    if (cesarNum[i] === 32) {
      cesarResult.push(32);
    } else {
      cesarResult.push(cesarNum[i] + 97);
    }
  }
  return String.fromCharCode(...cesarResult);
  // METHOD 2
  //   var arrResult = [];
  //   for (let i = 0; i < str.length; i++) {
  //     arrResult.push(((str.charCodeAt(i) - 97 + num) % 26) + 97);
  //   }
  //   return String.fromCharCode(...arrResult);
}

console.log(caesarSays("abz ab", 1));
