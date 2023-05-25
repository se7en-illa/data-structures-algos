//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;

function solution(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxSumLevel = 0;

  const traverse = (node, level) => {
    if (!node) {
      return;
    }

    if (level === sums.length) {
      sums.push(0);
    }

    sums[level] += node.value;

    if (sums[level] > maxSum) {
      maxSum = sums[level];
      maxSumLevel = level;
    }

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  const sums = [];
  traverse(root, 0);

  return maxSum;
}

function findMinDifference(array) {
  let minDiff = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      minDiff = Math.min(minDiff, Math.abs(array[i] - array[j]));
    }
  }
  return minDiff;
}
