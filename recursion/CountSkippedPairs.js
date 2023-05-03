/*
'''
❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1
*/

// Creating new strings
function countSkippedPairs(word) {
  function findPair(str) {
    if (str.length <= 2) return 0;

    if (str[0] === str[2]) return 1 + findPair(str.substring(1));

    return findPair(str.substring(1));
  }

  return findPair(word);
}

// Without creating new strings
function countSkippedPairs(word) {
  function helper(word, start) {
    if (word.length <= start + 2) {
      return 0;
    }

    if (word[start] === word[start + 2]) {
      return 1 + helper(word, start + 1);
    }

    return helper(word, start + 1);
  }

  return helper(word, 0);
}

function countSkippedPairs(str) {
  // Base case: if the string is too short to contain a skipped pair, return 0.
  if (str.length < 3) {
    return 0;
  }

  // Recursive case: count the skipped pairs in the remaining substring and add them up.
  let count = 0;

  if (str.charAt(0) === str.charAt(2)) {
    count = 1;
  }

  return count + countSkippedPairs(str.substring(1));
}

console.table([
  countSkippedPairs("axa") == 1,
  countSkippedPairs("axax") == 2,
  countSkippedPairs("aaa") == 1,
]);
