//  Deque implementation in javascript

class Deque {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items == [];
  }
  addRear(items) {
    this.items.push(items);
  }
  addFront(item) {
    this.items.splice(0, item);
  }
  removeFront() {
    return this.items.shift();
  }
  removeRear() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
}

// Usage

d = new Deque();
console.log(d.isEmpty());
d.addRear(8);
d.addRear(5);
d.addFront(7);
d.addFront(10);
console.log(d.size());
console.log(d.isEmpty());
d.addRear(11);
console.log(d.removeRear());
console.log(d.removeFront());
d.addFront(55);
d.addRear(45);
console.log(d.items);
