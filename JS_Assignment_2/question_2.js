//2. Write num1function to calculate which can add, subtract, multiply and divide two numbers.
//Use switch inside function.
function doMath(num1 = 0, num2 = 0, operator = "+") {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num1 === 0) result = -1;
      result = num1 / num2;
      break;
    default:
      result = -1;
  }
  return result;
}
const result = doMath((num1 = 10), (num2 = 20), (operator = "-"));
console.log("result: ", result);





