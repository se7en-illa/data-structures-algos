/*
'''
❓ PROMPT
Given a string and a non-empty substring *sub*, compute recursively the size of the largest substring which starts and ends with the given *sub* string and return its length, including the length of the substrings. When *sub* is multiple characters, they may overlap with each other and share characters.

Example(s)
strDist("catcowcat", "cat") == 9
strDist("catcowcat", "cow") == 3
strDist("cccatcowcatxx", "cat") == 9
strDist("ooowhwhwooo", "whw") == 5
*/

function strDist(str, sub) {
  // Base case: if the string is too short to contain the substring, return 0.
  if (str.length < sub.length) {
    return 0;
  }

  // Recursive case: check if the substring matches at the beginning and end of the string.
  if (startsWith(str, sub) && endsWith(str, sub)) {
    return str.length;
  }

  // Recursive case: if the substring doesn't match at the beginning, remove the first character and recurse.
  if (!startsWith(str, sub)) {
    return strDist(str.slice(1), sub);
  }

  // Recursive case: if the substring doesn't match at the end, remove the last character and recurse.
  if (!endsWith(str, sub)) {
    return strDist(str.slice(0, -1), sub);
  }
}

// Helper function: check if the string starts with the given substring.
function startsWith(str, sub) {
  if (sub.length > str.length) {
    return false;
  }
  if (sub === str.slice(0, sub.length)) {
    return true;
  }
  return false;
}

// Helper function: check if the string ends with the given substring.
function endsWith(str, sub) {
  if (sub.length > str.length) {
    return false;
  }
  if (sub === str.slice(-sub.length)) {
    return true;
  }
  return false;
}

console.table([
  strDist("catcowcat", "cat") == 9,
  strDist("catcowcat", "cow") == 3,
  strDist("cccatcowcatxx", "cat") == 9,
  strDist("ooowhwhwooo", "whw") == 5,
]);
