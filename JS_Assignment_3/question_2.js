// Q2 let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = "I love my India";
const newStr =
  str.slice(str.indexOf(" ") + 1, str.length) +
  " " +
  str.slice(0, str.indexOf(" "));

console.log(newStr);


