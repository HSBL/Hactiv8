function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var result = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    var objPenumpang = {},
      indexNaik = null,
      indexTurun = null;
    for (let j = 0; j < rute.length; j++) {
      if (rute[j] === arrPenumpang[i][1]) {
        indexNaik = j;
      } else if (rute[j] === arrPenumpang[i][2]) {
        indexTurun = j;
      }
    }
    objPenumpang.bayar = (indexTurun - indexNaik) * 2000;
    objPenumpang.tujuan = arrPenumpang[i][2];
    objPenumpang.naikDari = arrPenumpang[i][1];
    objPenumpang.penumpang = arrPenumpang[i][0];
    result.push(objPenumpang);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
