/*
'''
❓ PROMPT
Today, you will be determining if an array is monotonic or not. An array is monotonic if it is either monotone increasing or monotone decreasing.

Source: https://leetcode.com/problems/monotonic-array/

Example(s)
[1] => true
[1, 2] => true
[2, 1] => true
[2, 1, 3] => false
 

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
def isMonotonic(nums: list[int]) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function isMonotonic(nums) {
  if (nums.length <= 1) return true;
  let forward = nums[0] < nums[1];

  for (let i = 0; i < nums.length; i++) {
    if (forward === false) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
    if (forward === true) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isMonotonic([]) === true);
console.log(isMonotonic([5]) === true);
console.log(isMonotonic([5, 10]) === true);
console.log(isMonotonic([10, 5]) === true);
console.log(isMonotonic([1, 5, 5, 10]) === true);
console.log(isMonotonic([10, 5, 5, 1]) === true);
console.log(isMonotonic([10, 5, 5]) === true);
console.log(isMonotonic([5, 5, 10]) === true);
console.log(isMonotonic([4, 2, 8]) === false);
console.log(isMonotonic([8, 2, 4]) === false);
console.log(isMonotonic([8, 2, 4, 2]) === false);
console.log(isMonotonic([5, 5, 5]) === true);

function isMonotonic(nums) {
  let dec = true;
  let inc = true;

  for (let i = 1; i < nums.length; i++) {
    dec = dec && nums[i - 1] >= nums[i];
    inc = inc && nums[i - 1] <= nums[i];
  }

  return dec || inc;
}
