/*
'''
Count Nested Arrays

Given a nested array where each element may be 1) an integer or 2) an array, whose elements themselves may be integers or further arrays, count the total number of arrays.

What is the shape or pattern of this nested array structure? There can be empty lists but never None/null.
 

EXAMPLE(S)
countArrays([1, 2, 3]) == 1
countArrays([1, [1, 2, 3], 3]) == 2
countArrays([1, [1, [1, [1, [1]]]]]) == 5
countArrays([]) == 1
 
Brainstorm:
Input is an empty array
Input is not an array
If input is an array with ints 
If input is an array with arrays (empty or almost empty arrays, too)
If input is an array with ints and more arrays


Planning:
Variable to keep count
For loop to iterate over the array

if the input is an integer, return 0, otherwise count goes up

Imnplemnt:
- If the input is an array with length 0:
--return 1

- if the input is an integer
--reutrn 0

- Iterate through the array 
- if the current iteration has a type of array 
--return 1 + recurrsive function call 

FUNCTION SIGNATURE
*/

// function countArrays(array) {
// if (array.length === 0 || !array) return 1;

// if (typeof array === 'number') {
//   return 0;
// } else {
//   let count = 1;

//   for (let i = 0; i < array.length; i++) {
//     count += countArrays(array[i]);
//   }
//   return count;
// }
// }

function countArrays(array) {
  if (array == null) return 0;

  let sumTotal = 1; // always count itself

  array.forEach((element) => {
    if (Array.isArray(element)) sumTotal += countArrays(element);
  });

  return sumTotal;
}

// Test cases

console.table([
  countArrays([1, 2, 3]) == 1,
  countArrays([1, [1, 2, 3], 3]) == 2,
  countArrays([1, [1, [1, [1, [1]]]]]) == 5,
  countArrays([]) == 1,
]);

console.log(countArrays([1, 2, 3]) == 1);
console.log(countArrays([1, [1, 2, 3], 3]) == 2);
console.log(countArrays([1, [1, [1, [1, [1]]]]]) == 5);
console.log(countArrays([1, [2, 2], [3, 3], [4, 4], 5]) == 4);
console.log(countArrays([1, [2, [], 2], [3, [6], 3], [4, 4], 5]) == 6);
console.log(countArrays([[[[[[[[[[[[[]]]]]]]]]]]]]) == 13);
console.log(countArrays([]) == 1);
console.log(countArrays([[]]) == 2);
console.log(countArrays([[], [], []]) == 4);
console.log(countArrays(null) == 0);
