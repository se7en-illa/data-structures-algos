/*
'''
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.

Example(s)
findMinIndex([12, 1234, 45, 67, 1]) == 4
findMinIndex([10, 20, 30]) == 0
findMinIndex([8, 6, 7, 5, 3, 7]) == 4

findMaxIndex([12, 1234, 45, 67, 1]) == 1
findMaxIndex([10, 20, 30]) == 2
findMaxIndex([8, 6, 7, 5, 3, 7]) == 0
*/

function findMinIndex(arr, index = 0, min = Infinity) {
  if (index === arr.length) return arr.indexOf(min);
  return findMinIndex(
    arr,
    index + 1,
    (min = arr[index] < min ? arr[index] : min)
  );
}

function findMaxIndex(arr, index = 0, max = -Infinity) {
  if (index === arr.length) return arr.indexOf(max);
  return findMaxIndex(
    arr,
    index + 1,
    (max = arr[index] > max ? arr[index] : max)
  );
}

console.table([
  findMinIndex([12, 1234, 45, 67, 1]) == 4,
  findMinIndex([10, 20, 30]) == 0,
  findMinIndex([8, 6, 7, 5, 3, 7]) == 4,
  findMaxIndex([12, 1234, 45, 67, 1]) == 1,
  findMaxIndex([10, 20, 30]) == 2,
  findMaxIndex([8, 6, 7, 5, 3, 7]) == 0,
]);
