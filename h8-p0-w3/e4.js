function dataHandling2(arr) {
  arr.splice(1, 1, "Roman Alamsyah Elsharawy");
  arr.splice(2, 1, "Provinsi Bandar Lampung");
  arr.splice(4, 0, "Pria");
  arr.splice(5, 1, "SMA Internasional Metro");
  console.log(arr);
  var dob = arr[3].split("/");
  var month = Number(dob[1]);
  switch (month) {
    case 1:
      console.log("Januari");
      break;
    case 2:
      console.log("Februari");
      break;
    case 3:
      console.log("Maret");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("Mei");
      break;
    case 6:
      console.log("Juni");
      break;
    case 7:
      console.log("Juli");
      break;
    case 8:
      console.log("Agustus");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("Oktober");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("Desember");
      break;
    default:
      console.log("Bulan apaan nih");
      break;
  }
  console.log(dob.sort((a, b) => b - a));
  console.log(arr[3].split("/").join("-"));
  console.log(arr[1].slice(0, 15));
}

var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
