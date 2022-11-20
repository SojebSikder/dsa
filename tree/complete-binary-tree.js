// Complete Binary Tree Implementation using javascript
class Node {
  constructor(item) {
    this.item = item;
    this.left = null;
    this.right = null;
  }
}

// Count the number of nodes
function count_nodes(root) {
  if (root == null) {
    return 0;
  }
  return 1 + count_nodes(root.left) + count_nodes(root.right);
}

// Check if the tree is empty
function is_complete(root, index, numberNodes) {
  // Check if the tree is empty
  if (root == null) {
    return true;
  }

  if (index >= numberNodes) {
    return false;
  }
  return (
    is_complete(root.left, 2 * index + 1, numberNodes) &&
    is_complete(root.right, 2 * index + 2, numberNodes)
  );
}

// Usage
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

node_count = count_nodes(root);
index = 0;

if (is_complete(root, index, node_count)) {
  console.log("The tree is a complete binary tree");
} else {
  console.log("The tree is not a complete binary tree");
}
