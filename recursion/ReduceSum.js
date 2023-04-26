/*
'''
Array Reduce Sum Recursively

Given an array of length n, consolidate the sum created by adding index pairs until there's only a single index.
 

EXAMPLE(S)
[1, 2, 3, 4, 5] => 48

Explanation:
* The next array would be [3, 5, 7, 9] because [1+2, 2+3, 3+4, 4+5]
* The next array would be [8, 12, 16] because [3+5, 5+7, 7+9]
* The next array would be [20, 28] because [8+12, 12+16]
* The final answer would be [48] because [20+28] and there are not enough operands to add
 

FUNCTION SIGNATURE
def reduceSum(input: list[int]) -> int:

Parameters: // array, index
  What data needs to be passed into the function?

Break Case:  // 
  What is going to stop the process

Work: (position in function may vary)
  What needs to happen to the data?

Callback Function:
  Call the same function with the parameters changed

'''
*/

function reduceSumIterative(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function reduceSumRecursive(array, index) {
  if (index >= array.length) {
    return 0;
  }
  return array[index] + reduceSumRecursive(array, index + 1);
}

function reduceSum(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) {
    return array[0];
  }

  let newArray = [];
  let i = 0;

  while (i < array.length - 1) {
    newArray.push(array[i] + array[i + 1]);
    i++;
  }

  return reduceSum(newArray, 0, []);
}

// function reduceSum(array) {
//   if (array.length === 1) {
//     return array[0];
//   }
//   if(array.length < 1) return 0;

//   function createNewArray (arr, i = 0, newArray = []) {
//     console.log("NEW ARRAY: ", newArray, i >= arr.length-1);
//     if(i >= arr.length-1) {
//       console.log("FOUND IT! NEW ARRAY", newArray);
//       return newArray;
//     }
//     newArray.push(arr[i] + arr[i+1])

//     createNewArray(arr, i+1, newArray);
//   }

//   console.log("BEFORE ARRAY: ", array);
//   array = createNewArray(array);
//   console.log("AFTER ARRAY: ", array);

//   return reduceSum(array);
// }

function reduceSum(input) {
  if (input.length == 0) {
    return 0;
  }
  if (input.length == 1) {
    return input[0];
  }
  let output = [];
  let i = 0;
  for (let i = 0; i < input.length - 1; i++) {
    output.push(input[i] + input[i + 1]);
  }
  return reduceSum(output);
}

//Test Cases

console.table([
  reduceSum([1, 2, 3, 4, 5]) === 48,
  reduceSum([2, 4, 6, 8, 10]) === 96,
  reduceSum([]) === 0,
  reduceSum([3]) === 3,
  reduceSum([2, 2, 2, 2, 2]) === 32,
  reduceSum([1, 2, 3, 4, 5]) == 48,
  reduceSum([5]) == 5,
  reduceSum([1, 3, 5]) == 12,
  reduceSum([-5, 5]) == 0,
  reduceSum([-5, 5, -5, 5]) == 0,
  reduceSum([-5, 5, 5, -5]) == 20,
]);

console.log(reduceSum([2, 4, 6, 8, 10]));
console.log(reduceSum([2, 2, 2, 2, 2]));
