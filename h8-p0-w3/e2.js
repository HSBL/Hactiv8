function balikString(str) {
  //...
  let result = "";
  for (let i = str.length; i > 0; i--) {
    result += str[i - 1];
  }
  return result;
}

/*
input "hello world!"
output "!dlrow olleh"
*/
console.log(balikString("hello world!"));
