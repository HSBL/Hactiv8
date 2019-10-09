function shoppingTime(memberId, money) {
  // you can only write your code here!
  var itemSale = [
    { item: "Sepatu Stacattu", value: 1500000 },
    { item: "Baju Zoro", value: 500000 },
    { item: "Baju H&N", value: 250000 },
    { item: "Sweater Uniklooh", value: 175000 },
    { item: "Casing Handphone", value: 50000 }
  ];
  if (!memberId) {
    // CHECK INPUT
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < itemSale[itemSale.length - 1].value) {
    return "Mohon maaf, uang tidak cukup";
  }
  var result = {},
    listPurchased = [];
  result.memberId = memberId;
  result.money = money;
  for (let i = 0; i < itemSale.length; i++) {
    if (money >= itemSale[i].value) {
      listPurchased.push(itemSale[i].item);
      money -= itemSale[i].value;
    }
  }
  result.listPurchased = listPurchased;
  result.changeMoney = money;
  return result;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
