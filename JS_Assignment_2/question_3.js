// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person.
// You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
//
// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary) {
  if (typeof salary !== "number") return -1;

  let tax = 0;
  switch (true) {
    case 500000 >= salary:
      tax = salary * 0.0; // tax 0%
      break;

    case 1000000 >= salary:
      tax = salary * 0.1; // tax 10%
      break;

    case 1500000 >= salary:
      tax = salary * 0.2; // tax 20%
      break;

    case 1500000 < salary:
      tax = salary * 0.3; // tax 30%
      break;
    default:
      console.log("tax cannot be calculated");
  }
  return tax;
}
const tax = findTax((salary = 340400000));
console.log("tax on given salary : ", tax);


