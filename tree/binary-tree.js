// Binary Tree Implementation using javascript
class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }

  // Traverse preorder
  traversePreOrder() {
    console.log(this.val);
    if (this.left) {
      this.left.traversePreOrder();
    }
    if (this.right) {
      this.right.traversePreOrder();
    }
  }

  // Traverse inorder
  traverseInOrder() {
    if (this.left) {
      this.left.traverseInOrder();
    }
    console.log(this.val);
    if (this.right) {
      this.right.traverseInOrder();
    }
  }
  // Traverse postorder
  traversePostOrder() {
    if (this.left) {
      this.left.traversePostOrder();
    }
    if (this.right) {
      this.right.traversePostOrder();
    }
    console.log(this.val);
  }
}

// Usage

root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);

console.log("Pre order Traversal: ", (end = ""));
root.traversePreOrder();
console.log("\nIn order Traversal: ", (end = ""));
root.traverseInOrder();
console.log("\nPost order Traversal: ", (end = ""));
root.traversePostOrder();
