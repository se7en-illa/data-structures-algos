/*
'''
❓ PROMPT
Given an array of ints, compute recursively if there's a value immediately followed by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

Example(s)
array10x([1, 2, 20], 0) == True
array10x([3, 30], 0) == True
array10x([3], 0) == False
*/

function array10x(nums, index, nextIndex = 1) {
  if (index === nums.length) return false;

  if (nums[index] * 10 === nums[nextIndex]) {
    return true;
  } else {
    return array10x(nums, index + 1, nextIndex + 1);
  }
}

console.table([
  array10x([1, 2, 20], 0) == true,
  array10x([3, 30], 0) == true,
  array10x([3], 0) == false,
]);
