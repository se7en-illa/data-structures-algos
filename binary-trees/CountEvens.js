//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function solution(root) {
  if (!root) return 0;

  let count = root.value % 2 === 0 ? 1 : 0;

  return count + solution(root.left) + solution(root.right);
}
