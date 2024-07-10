// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function Sum(number) {
  while (number > 10) {
    let sum = 0;
    while (number != 0) {
      rem = number % 10;
      sum += rem;
      number = Math.floor(number / 10);
    }
    number = sum;
  }

  return number;
}

console.log("number", Sum(1222456));
