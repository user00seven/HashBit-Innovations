// Q4) Take any string with minimum 20 characters.
// Count number of consonant and vowel in the string.

const string20 = "Speak low if you speak love.";
let cout = 0;
for (let i = 0; i < string20.length; i++) {
  c = string20.charAt(i).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") cout++;
}
console.log(cout);


