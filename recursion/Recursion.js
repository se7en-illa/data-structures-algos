/*

    Recursion
    Fibonacci
    Get the length of a linked list
    Get the max/min value in a linked list
    Do a sorted insertion into a linked list

*/

// 0, 1, 1, 2 3 5 8 13

// F(1) = 0
// F(2) = 1
// F(n) = F(n-1) + F(n-2)

// F(5)
//   F(4)
//     F(3)
//       F(2) *
//       F(1) *
//     F(2) *
//   F(3)
//     F(2) *
//     F(1) *

// function fib(n) {
//   if (n == 1) {
//     return 0;
//   } else if (n == 2) {
//     return 1;
//   } else {
//     return fib(n-1) + fib(n-2);
//   }
// }

// // Length of a linked list
// LEN(null) = 0
// LEN(x:xs) = 1 + LEN(xs)
//   x = node.val
//   xs = node.next

// function len(node) {
//   if (node == null) {
//     return 0;
//   } else {
//     return 1 + len(node.next);
//   }
// }

// function len(node) {
//   let ctr = 0;
//   for (let i = node; !i; i= i.next) {
//     ctr++;
//   }
//   return ctr;
// }

// LEN2(null, currlen) = currlen
// LEN2(x:xs, currlen) = LEN2(xs, currlen + 1)
// LEN(node) = LEN2(node, 0)

// function len(node, currlen = 0) {
//   if (node == null) {
//     return currlen;
//   } else {
//     return len(node.next, currlen + 1);
//   }
// }

// function len(node, currlen = 0) {
//   while (true) {
//     if (node == null) {
//       return currlen;
//     } else {
//       node = node.next;
//       currlen = currlen + 1
//       //return len(node.next, currlen + 1);
//     }
//   }
// }

// // Linked List Find Max/Min
// MAX(null) = -Infinity
// MAX(x:xs) = max(x, MAX(xs))

// function max(node) {
//   if (node == null) {
//     return -Infinity;
//   } else {
//     return Math.max(node.val, max(node.next));
//   }
// }

// function max(arr, start = 0) {
//   if (start == arr.length) {
//     return -Infinity;
//   } else {
//     return Math.max(arr[start], max(arr, start + 1));
//   }
// }

// function max(node) {
//   let result = -Infinity;
//   function helper(node) {
//     if (node == null) {
//       return;
//     }
//     result = Math.max(result, node.val);
//     helper(node.next);
//   }

//   helper(node);
//   //return helper(node);
//   return result;
// }

// // Linked List Sorted Insert
// INS(val, null) = val:null
// INS(val, x:xs | val <= x) = val:x:xs
// INS(val, x:xs | val > x) = x:INS(val, xs)

// Cheat sheet

// O(1) Operations
// Read or write an element via the indexing operator []
// Add an new element to the end (push in Javascript or append in Python)
// Remove an element at the end (last index, pop in Javascript and Python)
// Python's pop() method also accepts an index parameter. The complexity isO(1) only if you don't pass a parameter and just remove the last element.

// O(n) Operations
// Adding a new element to the beginning at index 0 (unshift in Javascript or insert in Python
// Removing an element at the beginning (shift in Javascript or pop with an index parameter in Python)
// Similar for adding or removing in the middle as the remainder at larger indices must be shifted.
