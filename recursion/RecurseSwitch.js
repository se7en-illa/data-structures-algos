/*
'''
❓ PROMPT
Let's practice recursion by converting functions to and from recursive implementations. Copy the started code in the language of your choice below, then implement the missing functions and test! 

While reading the recursive implementation of *recursiveFactorial* as well as writing *recursiveMax*, consider the following:

1. What is my base case?
2. Which arguments do I need?
3. What do I do at each recursive step?

Example(s)
iterativeFactorial(3) -> 6
iterativeFactorial(4) -> 24
recursiveMax([4, 2, 7] -> 7
recursiveMax([1, -5, 0] -> 1
*/

function recursiveFactorial(x) {
  if (x <= 1) return 1;
  else return x * recursiveFactorial(x - 1);
}

function iterativeFactorial(x) {
  let fact = 1;

  for (let i = x; i >= 1; i--) {
    fact = fact * i;
  }

  return fact;
}

function iterativeMax(arr) {
  let result = arr.length > 0 ? arr[0] : null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) result = arr[i];
  }

  return result;
}

function recursiveMax(arr, curMax = -Infinity, i = 0) {
  if (!arr) return null;
  if (i === arr.length) return curMax;
  if (arr[i] > curMax) curMax = arr[i];
  return recursiveMax(arr, curMax, i + 1);
}

console.table([
  iterativeFactorial(3) == 6,
  iterativeFactorial(4) == 24,
  recursiveMax([4, 2, 7]) == 7,
  recursiveMax([1, -5, 0]) == 1,
]);
