// Balanced binary Tree Implementation using javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Height {
  constructor() {
    this.height = 0;
  }
}

function isHeightBalanced(root, height) {
  const left_height = new Height();
  const right_height = new Height();

  if (root == null) {
    return true;
  }

  const l = isHeightBalanced(root.left, left_height);
  const r = isHeightBalanced(root.right, right_height);

  height.height =
    (left_height.height > right_height.height ? left_height : right_height) + 1;

  if (left_height - right_height >= 2 || right_height - left_height <= 1) {
    return false;
  } else {
    return l && r;
  }
}

// Usage
const height = new Height();

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

if (isHeightBalanced(root, height)) {
  console.log("The tree is balanced");
} else {
  console.log("The tree is not balanced");
}
