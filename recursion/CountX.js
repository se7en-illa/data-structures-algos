/*
'''
❓ PROMPT
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

Example(s)
countX("xxhixx") == 4
countX("xhixhix") == 3
countX("hi") == 0
*/

function countX(word, count = 0, index = 0) {
  console.log(word, index, count);
  if (index === word.length) return count;
  if (word[index] === "x") {
    return countX(word, count + 1, index + 1);
  } else {
    return countX(word, count, index + 1);
  }
}

console.table([
  countX("xxhixx") == 4,
  countX("xhixhix") == 3,
  countX("hi") == 0,
]);
