/*
'''
❓ PROMPT
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops).

Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while integer division by 10 removes the rightmost digit (126 / 10 is 12). Be aware that some languages require some special handling to do integer division while others do not.

*Python integer division*: x // y
*Javascript integer division*: Math.floor(x / y)

Example(s)
count7(7) == 1
count7(123) == 0
count7(717) == 2
*/

function count7(n) {
  // Base case: if the number is 0, there are no more digits to check.
  if (n === 0) {
    return 0;
  }

  // Recursive case: count the 7's in the remaining digits and add them up.
  let lastDigit = n % 10;
  let remainingDigits = Math.floor(n / 10);
  let count = 0;

  // Check if the last digit is 7.
  if (lastDigit === 7) {
    count = 1;
  }

  // Recursively count the 7's in the remaining digits.
  return count + count7(remainingDigits);
}

console.table([count7(7) == 1, count7(123) == 0, count7(717) == 2]);
