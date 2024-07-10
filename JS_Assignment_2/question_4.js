// 4. Write a function to perform this. You are given two numbers n1 and n2.
// You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34,
// you'll do (6*4)+(0*3) = 24.

function Products(n1, n2) {
  let prod = 0;
  while (n1 !== 0 || n2 !== 0) {
    rem1 = n1 % 10;
    rem2 = n2 % 10;
  
    prod += rem1 * rem2;

    n1 = Math.floor(n1 / 10); 
    n2 = Math.floor(n2 / 10);
  }
  return prod;
}

console.log("product of two number's digits in serial: ", Products(6, 34));

