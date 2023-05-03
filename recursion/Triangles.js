/*
'''
❓ PROMPT
We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

Example(s)
triangle(2) == 3
triangle(3) == 6
triangle(5) == 15
*/

function triangle(rows, sum = 0) {
  if (rows === 0) return sum;
  return triangle(rows - 1, sum + rows);
}

console.table([triangle(2) == 3, triangle(3) == 6, triangle(5) == 15]);
