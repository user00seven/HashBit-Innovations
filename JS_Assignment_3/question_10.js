// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH 
//

function rev(str){
  const array = str.split('');
  const string = array.reduce( (acc, curr) => curr + acc, "");
  return string;

}

const str = "Hello";
console.log(rev(str))
