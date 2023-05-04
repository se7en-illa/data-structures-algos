// Coding Drills: Recursion on Arrays

// Sum all the elements in an array.
// arr, index = 0, sum = 0
// if the index === arr.length return sum
// sum += arr[index]
// return the function, with the arr, index + 1, and the sum

function sumArr(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumArr(arr, index + 1);
}

console.log(sumArr([1, 2, 3, 4, 5])); // 15

// Remove all target elements from an array.
// [1, 8, 2, 8, 3, 8, 4, 8, 5, 8] (target = 8) => [1, 2, 3, 4, 5]
function removeTargetElements(arr, target) {
  if (arr.length === 0) {
    return arr;
  }

  let results = [];

  function helper(index) {
    if (index >= arr.length) {
      return;
    }

    if (arr[index] !== target) {
      results.push(arr[index]);
    }

    helper(index + 1);
  }
  helper(0);

  return results;
}

console.log(removeTargetElements([1, 8, 2, 8, 3, 8, 4, 8, 5, 8], 8));

// Return true if an array has palindrome values
// ([3, 2, 1, 2, 3] => true,  [3, 2, 1] => false)

function palindrome(arr, left, right) {
  if (left >= right) return true;
  if (arr[left] !== arr[right]) return false;
  return palindrome(arr, left + 1, right - 1);
}

let arr = [3, 2, 1, 2, 3];
let arr2 = [3, 2, 1];
console.log(palindrome(arr, 0, arr.length - 1));
console.log(palindrome(arr2, 0, arr2.length - 1));

// Shift the elements in an array by 1 and move the last element to the first
// ([1, 2, 3, 4] => [4, 1, 2, 3])
function shiftElements(arr, offset) {
  if (arr.length === 0) {
    return arr;
  }

  function helper(val) {
    if (val == 0) {
      return;
    }
    arr.unshift(arr.pop());
    helper(val - 1);
  }
  helper(offset);
  return arr;
}

console.log(shiftElements([1, 2, 3, 4], 1));
console.log(shiftElements([1, 2, 3, 4], 2));
