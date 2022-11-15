// Full binary Tree Implementation using javascript

class newNode {
  constructor(k) {
    this.key = k;
    this.right = null;
    this.left = null;
  }
}

// Calculate the depth
function calculateDepth(node) {
  let d = 0;
  while (node != null) {
    d += 1;
    node = node.left;
  }
  return d;
}

// Check if the tree is perfect binary tree
function is_perfect(root, d, level = 0) {
  // Check if the tree is empty
  if (root == null) {
    return true;
  }

  // Check the presence of trees
  if (root.left == null && root.right == null) {
    return d == level + 1;
  }

  if (root.left == null || root.right == null) {
    return false;
  }

  return (
    is_perfect(root.left, d, level + 1) && is_perfect(root.right, d, level + 1)
  );
}

// Usage
let root = new newNode(1);
root.left = new newNode(2);
root.right = new newNode(3);
root.left.left = new newNode(4);
root.left.right = new newNode(5);
root.right.left = new newNode(4);
root.right.right = new newNode(5);

if (is_perfect(root, calculateDepth(root))) {
  console.log("The tree is a perfect binary tree");
} else {
  console.log("The tree is not a perfect binary tree");
}
