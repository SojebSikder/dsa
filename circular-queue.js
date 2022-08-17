// circular queue in js
class CircularQueue {
  constructor(k) {
    this.size = k;
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    if (this.front == 0 && this.rear == this.size - 1) {
      return true;
    }
    if (this.front == this.rear + 1) {
      return true;
    }
    return false;
  }

  // check is the queue is empty
  isEmpty() {
    if (this.front == -1) {
      return true;
    } else {
      return false;
    }
  }

  enQueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
    } else {
      if (this.front == -1) {
        this.front = 0;
      }
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = element;
      console.log("Inserted " + element);
    }
  }

  deQueue() {
    let element;
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    } else {
      element = this.queue[this.front];
      if (this.front == this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        /* Q has only one element, so we reset the queue after deleting it. */
        this.front = (this.front + 1) % this.size;
      }
      return element;
    }
  }

  display() {
    let i;
    if (this.isEmpty) {
      console.log("Empty queue");
    } else {
      console.log("Front -> " + this.front);
      console.log("Items ->");
      for (i = this.front; i != this.rear; i = (i + 1) % this.size) {
        console.log(this.queue[i]);
      }
      console.log(queue[i]);
      console.log("Rear -> " + this.rear);
    }
  }
}

const queue = new CircularQueue(2);
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.display();
