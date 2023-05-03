/*
'''
❓ PROMPT
Euclid's algorithm for finding the greatest common divisor (GCD) of two numbers *a* and *b* is:

euclidGCD(a, 0) := a
euclidGCD(a, b) := gcd(b, a mod b) 

Write a function that implements Euclid's algorithm and finds the GCD of two numbers. 

Check out this video https://www.youtube.com/watch?v=Jwf6ncRmhPg
for more information on this very old algorithm.

Wikipedia https://en.wikipedia.org/wiki/Euclidean_algorithm also has a formal write-up.

Example(s)
euclidGCD(9, 27) == 9
euclidGCD(27, 9) == 9
euclidGCD(3, 1) == 1
*/

function euclidGCD(a, b) {
  // Base case: if b is 0, then the GCD is a.
  if (b === 0) {
    return a;
  }

  // Recursive case: compute the GCD of b and a modulo b.
  return euclidGCD(b, a % b);
}

console.table([
  euclidGCD(9, 27) == 9,
  euclidGCD(27, 9) == 9,
  euclidGCD(3, 1) == 1,
]);
