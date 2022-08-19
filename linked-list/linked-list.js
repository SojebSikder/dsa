// Linked list simple implementation in javascript
class Node {
  //  Creating a node
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Usage
const linkedList = new LinkedList();

//  Assign item values
linkedList.head = new Node(1);
const second = new Node(2);
const third = new Node(3);

// Connect nodes
linkedList.head.next = second;
second.next = third;

//  Print the linked list item
while (linkedList.head != null) {
  console.log(linkedList.head.item);
  linkedList.head = linkedList.head.next;
}
