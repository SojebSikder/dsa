// Tree traversal in javascript
class Node {
  constructor(item) {
    this.left = null;
    this.right = null;
    this.val = item;
  }
}

function inorder(root) {
  if (root) {
    // Traverse left
    inorder(root.left);
    // Traverse root
    console.log(String(root.val) + "->");
    // Traverse right
    inorder(root.right);
  }
}

function postorder(root) {
  if (root) {
    // Traverse left
    postorder(root.left);
    // Traverse right
    postorder(root.right);
    // Traverse root
    console.log(String(root.val) + "->");
  }
}

function preorder(root) {
  if (root) {
    // Traverse root
    console.log(String(root.val) + "->");
    // Traverse left
    preorder(root.left);
    // Traverse right
    preorder(root.right);
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Inorder traversal ");
inorder(root);

console.log("\nPreorder traversal ");
preorder(root);

console.log("\nPostorder traversal ");
postorder(root);
