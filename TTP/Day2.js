/*
1. First Unique Character:

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
  Input: s = "leetcode"
  Output: 0

Example 2:
  Input: s = "loveleetcode"
  Output: 2

Example 3: 
  Input: s = "aabb"
  Output: -1
*/

//create a new map
//loop through the string, if map already has letter, increase the count, if not, add the letter
//iterate through the map, if the character only appears once, return the index
//else, return -1

// if its in not in the hash map add it
// else return the index

// function firstUniqueChar(str) {
//   let hash = {};

//   for(let i = 0; i < str.length; i++){
//       if (hash[str[i]]) {
//         hash[str[i]]++
//       } else {
//         hash[str[i]] = 1;
//       }
//   }

//   for (let key in hash) {
//     if (hash[key] === 1) return str.indexOf(key);
//   }

// return -1;
// }

function firstUniqueChar(str) {
  let hash = {};

  for (let key in str) {
    if (hash[str[key]]) {
      hash[str[key]]++;
    } else {
      hash[str[key]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] === 1) return i;
  }

  return -1;
}

// console.table([
//   firstUniqueChar("leetcode") == 0,
//   firstUniqueChar("loveleetcode") == 2,
//   firstUniqueChar("aabb") == -1,
// ])

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
//--------------------------------------------------------------------------

/*
2. Valid Anagram:
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Given two strings s and t:
if t is an anagram of s, return true. 
if t is not an anagram of s, return false.

Constraits:
• s & t are lowercase letters only with no punctuation

Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true

Example 2:
  Input: s = "rat", t = "car"
  Output: false

Example 3: 
  Input: s = "elbows", t = "below"
  Output: false
*/

function validAnagram(str, target) {
  let sCache = {};
  for (let elem of str) {
    if (sCache[elem]) sCache[elem]++;
    else sCache[elem] = 1;
  }
  let count = 0;
  for (let elem of target) {
    if (sCache[elem] > 0) {
      sCache[elem] = sCache[elem] - 1;
      count++;
    } else return false;
  }
  return target.length === str.length;
}

function validAnagram(str, target) {
  let strMap = {};
  let targetMap = {};

  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]]) {
      strMap[str[i]]++;
    } else {
      strMap[str[i]] = 1;
    }
  }

  for (let i = 0; i < target.length; i++) {
    if (targetMap[target[i]]) {
      targetMap[target[i]]++;
    } else {
      targetMap[target[i]] = 1;
    }
  }

  for (let key in strMap) {
    if (strMap[key] !== targetMap[key]) return false;
  }

  return true;
}

// console.table([
//   validAnagram("leetcode", "nagaram"), // false
//   validAnagram("rat", "car"), // false
//   validAnagram("anagram", "nagaram"), // true
// ])

/*
Time Complexity:
Space Complexity:
*/
//--------------------------------------------------------------------------
/*
3. Minimum Window Substring:
A substring is a contiguous non-empty sequence of characters within a string.

Given two strings largeString and target, return the minimum substring of largeString such that every character in target is included in the substring. If there is no such substring, return an empty string "".

Constraints:
• largeString and target are lowercase letters with no punctuation
• target does not have any duplicate characters

Example 1:
  Input: largeString = "adobecodebanc", target = "abc"
  Output: "banc"
  Explanation: The minimum substring "banc" includes 'a', 'b', and 'c' from target string.

*/

// target > str || !target || !str return ""

// a d o b e c o d e b a n c
// L     R

/*
{a:0
 b:0
 c:1 }

*/

//pointers moving
// while right < str.length
// conditonal if str[right] === any value in our hash map
//then we --
//value of our map??

function minSubstring(str, target) {
  if (target.length > str.length || !str || !target) return ""; // base case

  let targetMap = {}; // track the target values
  let uniqueChars = 0; // unique chars in the target str

  // fill the hash map with our target values
  for (let i = 0; i < target.length; i++) {
    let curr = target[i];
    if (targetMap[curr]) {
      targetMap[curr]++;
    } else {
      targetMap[curr] = 1;
      uniqueChars++;
    }
  }

  console.log("target map", targetMap);
  console.log("unique characters", uniqueChars);

  let left = 0; // left pointer
  let right = 0; // right pointer
  let counter = 0; // length counter;
  let substring = ""; // final answer

  // string search
  for (right = 0; right < str.length; right++) {
    let rightChar = str[right];
    if (rightChar in targetMap) {
      targetMap[rightChar]--;
      if (targetMap[rightChar] === 0) counter++; // needs to reach uniquechar length
    }

    if (counter === uniqueChars) {
      while (counter === uniqueChars) {
        // shrink left side
        let leftChar = str[left++];
        if (targetMap[leftChar] === 0) counter--;
        targetMap[leftChar]++;
      }

      // take substr
      let sub = str.slice(left - 1, right + 1);
      substring =
        str === "" ? sub : substring.length > sub.length ? sub : substring;
    }
  }
  return substring;
}

console.table([
  // minSubstring("adobecodebanc", "abc"), //"banc"
  minSubstring("ADOBECODEBANC", "BANC"), // "BANC"
  minSubstring("a", "a"), //"a"
  minSubstring("a", "aa"), // ""
]);

/*
Time Complexity:
Space Complexity:
*/
