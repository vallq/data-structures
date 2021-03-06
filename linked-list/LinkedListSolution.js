class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getFirst() {
    return this.head;
  }

  unshift(newNode) {
    if (!(newNode instanceof Node)) {
      throw new Error("not a node");
    }

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.getFirst();
      this.head = newNode;
    }

    this.length++;
  }

  shift() {
    const nodeToRemove = this.head;

    if (nodeToRemove) {
      this.head = nodeToRemove.next;
      this.length--;
    }

    return nodeToRemove;
  }

  getLast() {
    let currentNode = this.head;

    if (!currentNode || !currentNode.next) {
      return currentNode;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  pop() {
    let currentNode = this.head;

    if (!currentNode) {
      return null;
    } else if (!currentNode.next) {
      this.head = null;
      this.length--;
      return currentNode;
    } else {
      const nodeToPop = this.getLast();
      let nextNode = currentNode.next;

      while (nextNode.next) {
        currentNode = nextNode;
        nextNode = nextNode.next;
      }

      currentNode.next = null;
      this.length--;
      return nodeToPop;
    }
  }

  push(node) {
    if (!(node instanceof Node)) {
      throw new Error("not a node");
    } else {
      if (this.length < 1) {
        this.unshift(node);
      } else {
        let lastNode = this.getLast();
        lastNode.next = node;
        this.length++;
      }
    }
  }

  getSize() {
    return this.length;
  }

  getAt(targetIndex) {
    let countNode = 0;
    let currentNode = this.head;

    if (isNaN(targetIndex)) {
      throw new Error("not a number");
    }

    if (targetIndex === 0) {
      return currentNode;
    }

    if (targetIndex > this.length - 1 || targetIndex < 0) {
      throw new Error("index out of bound");
    }

    let nextNode = currentNode.next;
    while (countNode < targetIndex) {
      currentNode = nextNode;
      nextNode = nextNode.next;
      countNode++;
    }
    return currentNode;
  }

  insertAt(targetIndex, nodeToInsert) {
    let countNode = 0;
    let currentNode = this.head;

    if (targetIndex === 0) {
      this.unshift(nodeToInsert);
    } else if (targetIndex < 0 || targetIndex > this.length - 1) {
      throw new Error("index out of bound");
    } else if (!(nodeToInsert instanceof Node)) {
      throw new Error("not a node");
    } else {
      let nextNode = currentNode.next;
      while (countNode < targetIndex - 1) {
        currentNode = nextNode;
        nextNode = nextNode.next;
        countNode++;
      }
      currentNode.next = nodeToInsert;
      nodeToInsert.next = nextNode;
      this.length++;
    }
  }

  removeAt(targetIndex) {
    let countNode = 0;
    let currentNode = this.head;
    if (targetIndex === 0) {
      return this.shift();
    } else if (targetIndex < 0 || targetIndex > this.length - 1) {
      throw new Error("index out of bound");
    } else {
      let nextNode = currentNode.next;
      while (countNode <= targetIndex) {
        if (nextNode === this.getAt(targetIndex)) {
          currentNode.next = nextNode.next;
          this.length--;
          return nextNode;
        } else {
          currentNode = nextNode;
          nextNode = nextNode.next;
          countNode++;
        }
      }
    }
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    if (next === undefined) {
      this.next = null;
    } else if (next instanceof Node) {
      this.next = next;
    } else {
      throw new Error("not a node");
    }
  }
}

module.exports = { Node, LinkedList };
