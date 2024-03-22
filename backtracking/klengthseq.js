/*
'''
Print all K-length increasing sequences

Given two positive integers *seqLen* and *upperBound*, print all increasing sequences of length *seqLen* such that the elements in every sequence are from the first *upperBound* natural numbers. 

You can assume *seqLen* will be positive and <= *upperBound*. You may want to write a helper method to recurse easier.

EXAMPLE(S)
printSeq(seqLen=2, upperBound=3)
[1, 2]
[1, 3]
[2, 3]

printSeq(seqLen=3, upperBound=4)
[1, 2, 3]
[1, 2, 4]
[1, 3, 4]
[2, 3, 4]

printSeq(seqLen=1, upperBound=5)
[1]
[2]
[3]
[4]
[5]
 

FUNCTION SIGNATURE
def printSeq(seqLen: int, upperBound: int):
'''
*/

function printSeq(seqLen, upperBound) {
  let result = [];
  let stack = []; // breadcrumb

  function dfs(start) {
    if (stack.length === seqLen) {
      result.push([...stack]);
      return;
    }

    for (let i = start; i <= upperBound; i++) {
      if (stack.includes(i)) continue;
      stack.push(i); // leaving breadcrumb
      dfs(i + 1);
      stack.pop(); // picking it up
      //dfs(seq.concat(i), i + 1)
    }
  }

  dfs(1);

  return result;
}

console.log(printSeq(2, 3));
