/*
'''
❓ PROMPT
Given a non-negative int n, compute recursively (no loops) the number of occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4 (because 2+1+0+1).

Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while dividing (/) by 10 removes the rightmost digit (126 / 10 is 12).

Example(s)
count8(8) == 1
count8(818) == 2
count8(8818) == 4  (because 2+1+0+1)
*/

function count8(n) {
  if (n === 0) {
    return 0;
  }
  if (n % 100 === 88) {
    return 2 + count8(Math.floor(n / 10));
  }
  if (n % 10 === 8) {
    return 1 + count8(Math.floor(n / 10));
  }
  return count8(Math.floor(n / 10));
}

function count8(n, str = n.toString(), index = 0, count = 0) {
  console.log(str[index], index, count);
  console.log(str[index] === "8" && str[index + 1] === "8");
  if (index === str.length) return count;

  if (str[index] === "8" && str[index + 1] === 8)
    return count8(n, str, index + 2, count + 3);

  if (str[index] === "8") {
    return count8(n, str, index + 1, count + 1);
  } else {
    return count8(n, str, index + 1, count);
  }
}

console.table([
  // count8(8) == 1,
  // count8(818) == 2,
  count8(8818) == 4,
]);
