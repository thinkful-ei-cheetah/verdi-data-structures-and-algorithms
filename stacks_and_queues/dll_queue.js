'use strict';

class _Node {
  constructor(value, next=null, prev=null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class QDLL {
  constuctor(head, tail) {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    let newNode = new _Node(value);
    if(!this.last) {
      this.first = newNode;
      this.last = newNode;
      return;
    }
    
    this.last.next = newNode;
    newNode.prev = this.last;
    this.last = newNode;
  }

  dequeue() {
    if (!this.first) return;
    const temp = this.first;

    if (!this.first.next) {
      this.first = null;
      this.last = null;
      return temp.value;
    }
    
    this.first = this.first.next;
    this.first.prev = null;
    return temp.value;
  }

  print() {
    let result = '';
    let temp = this.first;
    while (temp.next) {
      result += `${temp.value}->`;
      temp = temp.next;
    }
    
    console.log(result+temp.value+'->null');
  }
}

const queue = new QDLL();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();

