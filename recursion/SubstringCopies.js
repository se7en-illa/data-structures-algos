/*
'''
❓ PROMPT
Given a string and a non-empty substring *sub*, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.

Example(s)
strCopies("catcowcat", "cat", 2) == True
strCopies("catcowcat", "cow", 2) == False
strCopies("catcowcat", "cow", 1) == True
'''
*/

// function strCopies(word, sub, n, index = 0) {
//   if(n === 0)
//     return true;
//   if(!word || ! sub || word.length - index < sub.length)
//     return false;

//   if(word.startsWith(sub, index)) {
//     n--;
//   }
//   return strCopies(word, sub, n, index + 1);
// }

function strCopies(str, sub, n) {
  if (n === 0) {
    return true;
  }
  if (str.length < sub.length) {
    return false;
  }
  if (str.substring(0, sub.length) === sub) {
    return strCopies(str.substring(1), sub, n - 1);
  }
  return strCopies(str.substring(1), sub, n);
}

console.table([
  strCopies("catcowcat", "cat", 2) == true,
  strCopies("catcowcat", "cow", 2) == false,
  strCopies("catcowcat", "cow", 1) == true,
]);
