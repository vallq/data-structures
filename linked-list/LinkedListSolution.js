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
      this.length++;
    } else {
      newNode.next = this.getFirst();
      this.head = newNode;
      this.length++;
    }
  }

  shift() {
    if (this.head === null) {
      return null;
    } else {
      const nodeToRemove = this.head;
      this.head = nodeToRemove.next;
      this.length--;
      return nodeToRemove;
    }
  }
  
  getLast() {
    let countNode = 0;
    let currentNode = this.head;

    if (currentNode === null) {
      return null;
    } else {
      let nextNode = currentNode.next;
      while (countNode <= this.length) {
        let nextNode = currentNode.next;
        if (currentNode.next === null) {
          return currentNode;
        } else {
          currentNode = nextNode;
          nextNode = nextNode.next;
          countNode++;
        }
      }
    }
  }

  pop() {
    let currentNode = this.head;
    let countNode = 0;
    if (currentNode === null) {
      return null;
    } else if (currentNode.next === null) {
      this.head = null;
      this.length--;
      return currentNode;
    } else {
      const nodeToPop = this.getLast();
      while (countNode < this.length) {
        let nextNode = currentNode.next;
        if (nextNode.next === null) {
          currentNode.next = null;
          this.length--;
          return nodeToPop;
        } else {
          currentNode = nextNode;
          nextNode = nextNode.next;
          countNode++;
        }
      }
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
    } else {
      if (targetIndex === 0) {
        return currentNode;
      } else if (targetIndex > this.length - 1 || targetIndex < 0) {
        throw new Error("index out of bound");
      } else {
        let nextNode = currentNode.next;
        while (countNode <= targetIndex) {
          if (countNode === targetIndex) {
            return currentNode;
          } else {
            currentNode = nextNode;
            nextNode = nextNode.next;
            countNode++;
          }
        }
      }
    }
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
      while (countNode <= targetIndex) {
        let nextNode = currentNode.next;
        if (countNode === targetIndex - 1) {
          currentNode.next = nodeToInsert;
          nodeToInsert.next = nextNode;
          this.length++;
          return;
        } else {
          currentNode = nextNode;
          nextNode = nextNode.next;
          countNode++;
        }
      }
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
      while (countNode <= targetIndex) {
        let nextNode = currentNode.next;
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
