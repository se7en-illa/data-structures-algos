/*
'''
❓ PROMPT
In mathematics, the factorial of a non-negative integer N, denoted as N!, is the multiplication product of all positive integers <= N. Compute the result recursively (without loops).

Example(s)
factorial(3) == 6
factorial(5) == 120
*/

// function factorial(n) {
//   if(n === 1) {
//     return 1
//   };
//   return n * factorial(n - 1);
// }

const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));

console.table([factorial(3) == 6, factorial(5) == 120]);
