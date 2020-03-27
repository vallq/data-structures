class Queue {
  constructor(maxLength) {
    this.queue = [];
    this.maxLength = maxLength;
  }

  enqueue(element) {
    if (this.getCurrentLength() < this.maxLength) {
      return this.queue.push(element);
    } else {
      throw new Error("the queue is full");
    }
  }

  dequeue() {
    if (this.getCurrentLength() > 0) {
      const dequeuedElement = this.queue.shift();
      return dequeuedElement;
    } else {
      throw new Error ("the queue is empty");
    }
  }

  peek() {
    if (this.getCurrentLength() > 0) {
      const firstElement = this.queue[0];
      return firstElement;
    } else {
      throw new Error ("the queue is empty");
    }
  }

  getCurrentLength() {
    return this.queue.length;
  }
}

module.exports = Queue;
