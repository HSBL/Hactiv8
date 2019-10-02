function palindrome(kata) {
  // you can only write your code here!
  // METHOD 1
  if (!kata) {
    // should handle empty string
    return false;
  } else if (typeof kata !== "string") {
    // should handle another data type
    kata = kata.toString();
  }
  kata = kata.toLowerCase(); // should handle "Katak"
  // MAIN LOGIC
  for (let i = 0; i < Math.floor(kata.length / 2); i++) {
    if (kata[i] !== kata[kata.length - 1 - i]) {
      return false;
    }
  }
  return true;

  // METHOD 2
  //   return !kata
  //     ? false
  //     : kata
  //         .toString()
  //         .toLowerCase()
  //         .split("")
  //         .reverse()
  //         .join("") === kata.toString().toLowerCase();
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
