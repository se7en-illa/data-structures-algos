/*
'''
❓ PROMPT
Because strings are immutable, this problem takes more work than it does for an array. With an array, we can move individual values around and assign them into different locations. But with a string, we need to actually create an entirely new one.

Yes, in many modern languages this can be done with built in methods, but here we're working on basic coding patterns and coding fluency. We're going to mostly write this out.

Example(s)
reverseString("noitamroF") => "Formation"
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT

def reverseString(s):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function reverseString(s) {
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  return result;
}

function solution(string) {
  if (string === "") return "";
  string = string.trim().split(" ");

  const filteredWords = string.filter((word) => word.length > 0);

  return filteredWords.join(" ");
}

reverseString(""); //=> ""
reverseString("a"); //=> "a"
reverseString("foo"); //=> "oof"
reverseString("food"); // => "doof"

/*
  Q. Given a substring sub and an input string full, remove all non-overlapping occurrences of sub from full.
  
  Input: full: "abc" & sub: "ab"
  Expected Output: "c"
  Input: full: "ababab" & sub: "b"
  Expected Output: "aaa"
  Input: full: "abcabcabcabcabc" & sub: "abcba"
  Expected Output: "abcabcabcabcabc"
  because "abcba" doesn't appears in the 'full' st
  */

function solution(full, sub) {
  return full.split(sub).join("");
}

/*
  
  Write a function that takes a string as input and returns the string with only the vowels reversed.
  Note: The letters "a", "e", "i", "o", and "u" are vowels. The letter "y" is not a vowel.
  
  Example
  
  For s = "hello, world", the output should be
  solution(s) = "hollo, werld";
  For s = "codesignal", the output should be
  solution(s) = "cadisegnol";
  For s = "eIaOyU", the output should be
  solution(s) = "UOaIye".
  
  */

function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  const vowelArray = [];

  // Extract vowels from the string
  for (let char of s) {
    if (vowels.includes(char)) {
      vowelArray.push(char);
    }
  }

  // Reverse the order of the vowels
  vowelArray.reverse();

  // Reconstruct the string with reversed vowels
  let result = "";
  let vowelIndex = 0;
  for (let char of s) {
    if (vowels.includes(char)) {
      result += vowelArray[vowelIndex++];
    } else {
      result += char;
    }
  }

  return result;
}

// Example usage
console.log(reverseVowels("hello, world")); // Output: "hollo, werld"
console.log(reverseVowels("codesignal")); // Output: "cadisegnol"
console.log(reverseVowels("eIaOyU")); // Output: "UOaIye"

/*
  Q. Given a string and a target string, count the number of times the target string shows up in the input string. String parts that were already counted cannot be counted again (no overlapping allowed).
  
  Example:
  Input: "111", target = "11"
  Output: 1 (if the overlapping was allowed, the answer would be 2)
  */

function countNonOverlappingOccurrences(input, target) {
  let count = 0;
  let index = 0;

  while (index < input.length) {
    // Check if the target string is found at the current index
    if (input.substring(index, index + target.length) === target) {
      count++;
      // Jump ahead by the length of the target string to avoid overlapping
      index += target.length;
    } else {
      // Move to the next character in the input string
      index++;
    }
  }

  return count;
}

// Example usage
console.log(countNonOverlappingOccurrences("111", "11")); // Output: 1
