function groupAnimals(animals) {
  // you can only write your code here!
  var alphabet = "abcdefghijklmnopqrstuvwxyz",
    result = [];
  for (let i = 0; i < alphabet.length; i++) {
    var sameAnimal = [];
    for (let j = 0; j < animals.length; j++) {
      if (alphabet[i] === animals[j][0]) {
        sameAnimal.push(animals[j]);
      }
    }
    if (sameAnimal.length > 0) {
      result.push(sameAnimal);
      sameAnimal = [];
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
