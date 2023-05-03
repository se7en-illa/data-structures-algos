/*
'''
❓ PROMPT
Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.

This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths.

Example(s)
generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 3) == [
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]
*/

function generatePasswords(chars, minLength, maxLength) {
  let passwords = [];
  generate("", minLength, maxLength);

  function generate(prefix, minLength, maxLength) {
    // Base case: if the prefix has reached the maximum length, add it to the result.
    if (prefix.length >= minLength && prefix.length <= maxLength) {
      passwords.push(prefix);
    }

    // Recursive case: generate all possible strings by appending each character to the prefix.
    for (let i = 0; i < chars.length; i++) {
      generate(prefix + chars[i], minLength, maxLength);
    }
  }

  return passwords;
}

console.table([
  generatePasswords(["a"], 2, 4) == ["aa", "aaa", "aaaa"],
  generatePasswords(["a", "b", "c"], 2, 3) ==
    [
      "aa",
      "aaa",
      "aab",
      "aac",
      "ab",
      "aba",
      "abb",
      "abc",
      "ac",
      "aca",
      "acb",
      "acc",
      "ba",
      "baa",
      "bab",
      "bac",
      "bb",
      "bba",
      "bbb",
      "bbc",
      "bc",
      "bca",
      "bcb",
      "bcc",
      "ca",
      "caa",
      "cab",
      "cac",
      "cb",
      "cba",
      "cbb",
      "cbc",
      "cc",
      "cca",
      "ccb",
      "ccc",
    ],
]);
