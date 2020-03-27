const Stack = require("./Stack");

describe("Stack", () => {
  it("should return a populated stack when 1 element is pushed into the initial empty stack", () => {
    const myStack = new Stack();

    myStack.push(1);

    expect(myStack.getLength()).toEqual(1);
  });

  it("should return [1, 2] when 3 elements are pushed in and 1 is popped out", () => {
    const myStack = new Stack();

    myStack.push(1);
    myStack.push(2);
    myStack.push(3);

    expect(myStack.pop()).toEqual(3);
    expect(myStack.pop()).toEqual(2);
    expect(myStack.pop()).toEqual(1);
    expect(() => myStack.pop()).toThrow("the stack is empty");
  });

  it("should return 3 when 3 elements are pushed in and last element is peeked", () => {
    const myStack = new Stack();

    myStack.push(1);
    myStack.push(2);
    myStack.push(3);

    const lastElement = myStack.peek();
    expect(lastElement).toEqual(3);
  });

  it("should return empty stack message when pop is called but stack is empty", () => {
    const myStack = new Stack();

    expect(() => myStack.pop()).toThrow("the stack is empty");
  });

  it("should return empty stack message when peek is called but stack is empty", () => {
    const myStack = new Stack();

    expect(() => myStack.peek()).toThrow("the stack is empty");
  });
});
