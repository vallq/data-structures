class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    } else {
      throw new Error ("the stack is empty");
    }
  }

  peek() {
    if (this.stack.length > 0) {
      const stackLength = this.stack.length;
      const lastElement = this.stack[stackLength - 1];
      return lastElement;
    } else {
      throw new Error ("the stack is empty");
    }
  }

  getLength() {
    return this.stack.length;
  }
}

module.exports = Stack;
