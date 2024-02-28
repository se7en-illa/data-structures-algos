/*
'''
❓ PROMPT
Given an array of numbers, return an array of the three largest values. 

Example(s)
findThreeLargest([1, 2, 3, 4])
findThreeLargest([1, 2, 3, 27, 4, 5, 35, 6])

 

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

def find_three_largest(nums):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function findThreeLargest(nums) {
  nums = nums.sort((a, b) => b - a);

  return nums.filter((num, i) => i <= 2);
}

function findThreeLargest(nums) {
  if (nums.length <= 3) {
    return nums;
  }

  const results = [];
  let upperBound = Number.MAX_VALUE;

  for (let i = 0; i < 3; i++) {
    let largest = Number.MIN_VALUE;
    for (const val of nums) {
      if (val > largest && val < upperBound) {
        largest = val;
      }
    }
    results.push(largest);
    upperBound = largest;
  }

  return results;
}

console.log(findThreeLargest([]));
console.log(findThreeLargest([1]));
console.log(findThreeLargest([1, 2]));
console.log(findThreeLargest([1, 2, 3]));
console.log(findThreeLargest([1, 2, 3, 4, 5, 6, 7]));
