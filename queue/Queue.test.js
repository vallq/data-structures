const Queue = require("./Queue");

describe("Queue", () => {
  it("should return a populated queue when 1 element is enqueued into the initial empty queue", () => {
    const myQueue = new Queue(3);

    myQueue.enqueue(1);

    expect(myQueue.getCurrentLength()).toEqual(1);
  });

  it("should return dequeued elements and subsequent empty queue message", () => {
    const myQueue = new Queue(3);

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);

    expect(myQueue.dequeue()).toEqual(1);
    expect(myQueue.dequeue()).toEqual(2);
    expect(myQueue.dequeue()).toEqual(3);
    expect(() => myQueue.dequeue()).toThrow("the queue is empty");
  });

  it("should return 1 when 1, 2, 3 are enqueued and the queue is peeked", () => {
    const myQueue = new Queue(3);

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);

    const firstElementInQueue = myQueue.peek();
    expect(firstElementInQueue).toEqual(1);
  });

  it("should return full queue message when a 4th element is added to a queue of max length 3", () => {
    const myQueue = new Queue(3);

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);

    expect(() => myQueue.enqueue(4)).toThrow("the queue is full");
  });

  it("should return empty queue message when peek is called but queue is empty", () => {
    const myQueue = new Queue(3);

    expect(() => myQueue.peek()).toThrow("the queue is empty");
  });
});
