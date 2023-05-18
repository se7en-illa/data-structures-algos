/*
'''
Recursively Print Triangle

Use recursion to print an upside-down triangle of *X*s with a starting length k and tapering by 2 on subsequent levels. There should be the correct amount of leading spaces on each level. You can assume k will always be odd and positive.

Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.
 

EXAMPLE(S)
printXTriangle(5)
XXXXX
 XXX
  X

printTriangle([a,b,c,d,e])
abcde
 bcd
  c
 

FUNCTION SIGNATURE
def printXTriangle(k: int) -> None:
def printTriangle(array: list[str]) -> None:
'''
*/

// Brainstorm
//if it's a number, print x's
//if it's an array, print values
//should end at 1/not be negative

// Plan
// check whether input is a number or array
// helper FUNCTION
// if # > 0
//

//Implement

function printTriangle(shape, spaces = 0) {
  if (typeof shape === "number") {
    if (shape > 0) {
      console.log(" ".repeat(spaces) + "X".repeat(shape));
    } else return;
    return printTriangle(shape - 2, spaces + 1);
  }
}

function printTriangleArr(arr, index = 0, spaces = 0) {
  console.log(
    " ".repeat(spaces) + arr.slice(index, arr.length - index).join("")
  );

  if (index < arr.length / 2) {
    return printTriangleArr(arr, index + 1, spaces + 1);
  }
}

//Verify
/*
    printTriangle([a,b,c,d,e])
    abcde
     bcd
      c
    */

printTriangle(5);
printTriangleArr(["a", "b", "c", "d", "e"]);

printTriangle(7);
console.log("====");
// XXXXXXX
//  XXXXX
//   XXX
//    X

printTriangle(5);
console.log("====");
// XXXXX
//  XXX
//   X

printTriangle(3);
console.log("====");
// XXX
//  X

printTriangle(1);
console.log("====");
// X

printTriangleArr(["t", "a", "c", "o", "c", "a", "t"]);
console.log("====");
// tacocat
//  acoca
//   coc
//    o

printTriangleArr(["a", "b", "c", "d", "e"]);
console.log("====");
// abcde
//  bcd
//   c

printTriangleArr(["X"]);
console.log("====");
// X
