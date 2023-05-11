/*
1. Factorial - the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point.

Given an integer, n, write a function that produces it's factorial value.

Example 1:
  Input: n = 3
  Output: 26
  Explanation: 3 * 2 * 1 = 6
  
Example 2:
  Input: n = 4
  Output: 24
  Explanation: 4 * 3 * 2 * 1 = 24

Example 3: 
  Input: n = 5
  Output: 120
  Explanation: 5 * 4 * 3 * 2 * 1 = 120
*/

// result variable
// decrement n

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const factorialRefactor = (n) => (n === 1 ? 1 : n * factorialRefactor(n - 1));

console.table([factorialRefactor(4), factorialRefactor(5)]);

/* Time Complexity:
   Space Complexity:
*/

/*
2. Fibonacci - a sequence such that each number is the sum of the two numbers preceding it. 

The Fibonacci sequence goes as follows:
1, 1, 2, 3, 5, 8, 13, 21, ... and so on

At the 0 index, we assign value of 1.
At the 1 index, we assign value of 1.
At the 2 index, 2 is the sum of 1 and 1, so the Fibonacci number of 2 is 2.
At the 3 index, 3 is the sum of 2 and 1, so the Fibonacci number of 3 is 3.
At the 4 index, 5 is the sum of 3 and 2, so the Fibonacci number of 4 is 5.
At the 5 index, 8 is the sum of 5 and 3, so the Fibonacci number of 5 is 8.
At the 6 index, 13 is the sum of 8 and 5, so the Fibonacci number of 6 is 13.
At the 7 index, 21 is the sum of 13 and 8, so the Fibonacci number of 7 is 21.

Given an integer, n, write a function that produces it's Fibonacci number.

Example 1:
  Input: n = 5
  Output: 8
  
Example 2:
  Input: n = 6
  Output: 24

Example 3: 
  Input: n = 15
  Output: 610
*/

// base case, return 1
function fib(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

console.table([
  fib(5), // 8
  fib(7), // 21
  fib(4),
  fib(6),
]);

/* Time Complexity:
   Space Complexity:
*/

/*
3. Integer Replacement:

Given a positive integer n, you can apply one of the following operations:

If n is divisible by 3, replace n with n / 3.
If n is divisible by 2, replace n with n / 2.
Otherwise, replace n with n - 1.

Write a function that returns the minimum number of steps needed for n to become 1.

Example 1:
  Input: n = 5
  Output: 3
  
Example 2:
  Input: n = 10
  Output: 3

Example 3:
  Input: n = 30
  Output: 4
*/

/*
  10 +1
  5  +1
  4  +1
  2  +1
  3
  
  30 +1
  10 +1
  5 +1
  4 +1
  2 +1
  1
  
*/

function minSteps(n, min = 0) {
  if (n === 1) return min;

  if (n % 3 === 0) {
    return minSteps(n / 3, min + 1);
  }

  if (n % 2 === 0) {
    return minSteps(n / 2, min + 1);
  }

  return minSteps(n - 1, min + 1);
}

console.table([
  minSteps(5), // 3
  minSteps(10), // 4
  minSteps(30), // 4
]);

// function minStepsRecursive(n) {
//   if(n === 1) return 0;

//   if(n % 3 === 0){
//     return 1 + minStepsRecursive(n/3)
//   } else if (n % 2 === 0) {
//     return 1 + minStepsRecursive(n/2)
//   } else {
//     return 1 + minStepsRecursive(n - 1)
//   }
// }

// console.table([
//   minStepsRecursive(5), // 3
//   minStepsRecursive(10), // 3
//   minStepsRecursive(30) // 4
// ])

/* Time Complexity:
   Space Complexity:
*/
