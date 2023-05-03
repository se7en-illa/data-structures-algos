/* 
Create a base case that returns 1 if n is equal to 0 or 1.
In the recursive case, return n multiplied by the 
result of the same function called with an argument of n-1.
*/

function solution(n) {
  if (n == 1 || n == 0) return 1;
  let count = n;

  while (count >= 0) {
    return n * solution(n - 1);
  }

  return n;
}

/*
Create a helper function that takes in an array and the current index as parameters. The current index will be used to keep track of the position in the array.

Within the helper function, check if the current index is greater than or equal to the length of the array. If it is, then return 0.

If the current index is less than the length of the array, return the element at the current index plus the result of calling the helper function with the next index and the same array as parameters.

In the main function, call the helper function with the starting index of 0 and the input array as parameters.

Return the value returned by the helper function.
*/

function helper(arr, index) {
  if (index >= arr.length) return 0;
  if (index < arr.length) return arr[index] + helper(arr, index + 1);
}

function solution(arr) {
  return helper(arr, (index = 0));
}

/*
Create a helper function that takes in an array as a parameter.

Within the helper function, check if the array is empty. If it is empty, return an empty array.

If the array is not empty, return a new array that consists of the last element of the input array concatenated with the result of calling the helper function with the array slice of all elements except the last one.

In the main function, call the helper function with the initial input array as the argument.

Return the value returned by the helper function.
*/

function helper(arr) {
  if (!arr.length) return [];

  let last = arr[arr.length - 1];
  let recurse = helper(arr.slice(0, arr.length - 1));

  return recurse.concat(last);
}

function solution(arr) {
  return helper(arr).reverse();
}
