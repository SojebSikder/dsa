// Binary search Tree Implementation using javascript

/**
 * Create a node
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// Inorder traversal
function inorder(root) {
  if (root != null) {
    // traverse left
    inorder(root.left);

    // Traverse root
    console.log(root.key + "->");

    // Traverse right
    inorder(root.right);
  }
}

// Insert e node
function insert(node, key) {
  // Return a new node if the tree is empty
  if (node == null) {
    return new Node(key);
  }

  // Traverse to right place and insert the node
  if (key < node.key) {
    node.left = insert(node.left, key);
  } else {
    node.right = insert(node.right, key);
  }
  return node;
}

// Find the inorder successor
function minValueNode(node) {
  const current = node;

  // Find the leftmost leaf
  while (current.left != null) {
    current = current.left;
  }
  return current;
}

// Deleting a node
function deleteNode(root, key) {
  // Return if the tree is empty
  if (root == null) {
    return root;
  }

  // Find the node to be deleted
  if (key < root.key) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.key) {
    root.right = deleteNode(root.right, key);
  } else {
    // If the node is with only one child or no child
    if (root.left == null) {
      const temp = root.right;
      root = null;
      return temp;
    } else if (root.right == null) {
      const temp = root.left;
      root = null;
      return temp;
    }

    // If the node has two children,
    // place the inorder successor in position of the node to be deleted
    const temp = minValueNode(root.right);
    root.key = temp.key;

    // Delete the inorder successor
    root.right = deleteNode(root.right, temp.key);
  }
  return root;
}

// Usage
let root = null;
root = insert(root, 8);
root = insert(root, 3);
root = insert(root, 1);
root = insert(root, 6);
root = insert(root, 7);
root = insert(root, 10);
root = insert(root, 14);
root = insert(root, 4);

console.log("Inorder traversal: ", (end = " "));
inorder(root);

console.log("\nDelete 10");
root = deleteNode(root, 10);
console.log("Inorder traversal: ", (end = " "));
inorder(root);
