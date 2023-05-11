class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Generate Tree from Array
function generateTree(arr) {
  if (arr.length === 0) {
    return null;
  }
  let root = new TreeNode(arr[0]);
  let queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
}
/*  Let's build the following tree with deserialize:
 *
 *               4
 *            /     \
 *          2        5
 *        /   \     /  \
 *      1      3   n     7
 *    /  \    /  \     /   \
 *   n   n   n    n   6     8
 */
let array = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8];
let tree = generateTree(array);

/*******Iterative Methods*******/

//Breadth First Search
function bfs(node) {
  let queue = [node];
  let result = [];

  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.value);
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return result;
}
//console.log("BFS:", bfs(tree));
// Output: [4,2,5,1,3,7,6,8]
/* 
  Time Complexity:
  Space Complexity:
  */

// Depth First Search
function dfs(node) {
  if (!node) return;

  let queue = [node];
  let result = [];

  while (queue.length > 0) {
    let current = queue.pop();
    console.log("result:", result);
    result.push(current.value);

    if (current.left) {
      console.log("this is the current: ", current.value);
      console.log("left: ", current.left.value);
      queue.push(current.left);
    }

    if (current.right) {
      console.log("right", current.right.value);
      queue.push(current.right);
    }
  }
  return result;
}

// console.log("DFS:", dfs(tree));
// Output: [4,5,7,8,6,2,3,1]
/* 
   *               4
   *            /     \
   *          2        5
   *        /   \     /  \
   *      1      3   n     7
   *    /  \    /  \     /   \
   *   n   n   n    n   6     8
  
  Time Complexity:
  Space Complexity:
  */

/*******Recursive Methods*******/

// Depth First Search

function dfsR(node, result = [], steps = 1) {
  if (!node) return;

  // if (node) {
  // console.log('steps:', steps, 'node: ', node.value)
  // }

  result.push(node.value);
  dfsR(node.right, result, steps + 1);
  dfsR(node.left, result, steps + 1);

  return result;
}

//Output: [4,2,1,3,5,7,6,8] or [1,2,3,4,5,6,7,8] or [1,3,2,6,8,7,5,4]
console.log("DFS-R:", dfsR(tree));
