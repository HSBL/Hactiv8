function changeVocals(str) {
  //code di sini
  // (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
  var vocalChanger = {
      a: "b",
      e: "f",
      i: "j",
      o: "p",
      u: "v",
      A: "B",
      E: "F",
      I: "J",
      O: "P",
      U: "V"
    },
    result = "";
  for (let i = 0; i < str.length; i++) {
    var vokal = false;
    for (const key in vocalChanger) {
      if (str[i] === key) {
        vokal = true;
        result += vocalChanger[key];
      }
    }
    if (!vokal) {
      result += str[i];
    }
  }
  //   console.log(str);
  return result;
}

function reverseWord(str) {
  //code di sini
  var result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  //   console.log(str);
  return result;
}

function setLowerUpperCase(str) {
  //code di sini
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower = "abcdefghijklmnopqrstuvwxyz",
    result = "";
  for (let i = 0; i < str.length; i++) {
    var upperCase = false,
      lowerCase = false;
    for (let j = 0; j < upper.length; j++) {
      if (str[i] === upper[j]) {
        result += lower[j];
        upperCase = true;
        break;
      }
    }
    if (!upperCase) {
      for (let j = 0; j < lower.length; j++) {
        if (str[i] === lower[j]) {
          result += upper[j];
          lowerCase = true;
          break;
        }
      }
      if (!lowerCase) {
        result += str[i];
      }
    }
  }
  //   console.log(str);
  return result;
}

function removeSpaces(str) {
  //code di sini
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    } else {
      result += str[i];
    }
  }
  //   console.log(str);
  return result;
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
