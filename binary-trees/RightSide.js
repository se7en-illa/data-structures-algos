//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function solution(root) {
  const result = [];

  const dfs = (node, depth) => {
    if (!node) return;

    if (depth === result.length) {
      result.push(node.value);
    }

    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  };

  dfs(root, 0);

  return result;
}
