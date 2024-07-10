// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

let sentance = "wrong is always written wrong";

function correctfn(string, correct, wrong) {
  const newSentance = string.replaceAll(wrong, correct);
  return newSentance;
}

console.log(correctfn(sentance, "correct", "wrong"));


