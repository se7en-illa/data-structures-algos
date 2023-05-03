/*
'''
❓ PROMPT
Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

Example(s)
sumDigits(12) == 3
sumDigits(49) == 13
sumDigits(126) == 9
*/

function sumDigits(n) {
  if (n < 10) return n;

  let rightDigit = n % 10;
  let next = Math.floor(n / 10);

  return rightDigit + sumDigits(next);
}

console.table([sumDigits(12) == 3, sumDigits(49) == 13, sumDigits(126) == 9]);
