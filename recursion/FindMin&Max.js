/*
'''
❓ PROMPT
Given an array, write 2 recursive functions to find the minimum and maximum element in an array. You may use the *min(a,b)* and *max(a,b)* functions to shorthand picking the minimum and maximum between 2 values.

Example(s)
findMin([12, 1234, 45, 67, 1]) == 1
findMin([10, 20, 30]) == 10
findMin([8, 6, 7, 5, 3, 7]) == 3

findMax([12, 1234, 45, 67, 1]) == 1234
findMax([10, 20, 30]) == 30
findMax([8, 6, 7, 5, 3, 7]) == 8
*/

function findMin(arr, index = 0, min = Infinity) {
  if (index === arr.length) return min;
  return findMin(arr, index + 1, (min = arr[index] < min ? arr[index] : min));
}

function findMax(arr, index = 0, max = -Infinity) {
  if (index === arr.length) return max;
  return findMax(arr, index + 1, (max = arr[index] > max ? arr[index] : max));
}

console.table([
  findMin([12, 1234, 45, 67, 1]) == 1,
  findMin([10, 20, 30]) == 10,
  findMin([8, 6, 7, 5, 3, 7]) == 3,
  findMax([12, 1234, 45, 67, 1]) == 1234,
  findMax([10, 20, 30]) == 30,
  findMax([8, 6, 7, 5, 3, 7]) == 8,
]);
