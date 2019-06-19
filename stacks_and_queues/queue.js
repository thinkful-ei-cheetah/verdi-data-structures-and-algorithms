'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
    this.length++;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }

    this.length--;
    return node.value;
  }
}

module.exports = Queue;

function peek(queue){
  if (queue.first) {
    return queue.first.value;
  }
  return null;
}

function isEmpty(queue){
  return (queue.first===null);
}

function display(queue) {
  if (isEmpty(queue)) return;
  let tempTop = queue.first;
  while (tempTop) {
    console.log(tempTop.value);
    tempTop = tempTop.next;
  }
}

// const queue = new Queue();
// queue.enqueue('a');
// queue.enqueue('b');
// queue.enqueue('c');

// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue.dequeue());
// console.log(queue);
