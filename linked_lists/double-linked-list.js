'use strict';

const utility = require('./utility');

class _Node {
  constructor(value, next=null, prev=null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DLL {
  constuctor(head, tail) {
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    let newNode = new _Node(value);
    if(!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    let temp = this.head;
    this.head = newNode;
    this.tail.prev = newNode;
    newNode.next = temp;
    console.log(newNode.value);
    return newNode;
  }

  insertLast(value) {
    let newNode = new _Node(value);
    if(!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    let temp = this.tail;
    this.tail = newNode;
    temp.next = newNode;
    newNode.prev = temp;
    return newNode;
  }

  remove(value) {
    // 1->2->3->3->4
    // 1->null
    let currNode = this.head;
    if (!currNode.next) {
      if (currNode.value === value) {
        this.head = null;
        this.tail = null;
        return;
      }
    }

    while (currNode.next !== null) {
      if (currNode.value === value) {
        let prevNode = currNode.prev;
        let nextNode = currNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }
      currNode = currNode.next;
    }
  }

}

let list = new DLL();
// list.insertFirst(2);
list.insertFirst(1);
// list.insertLast(3);
// list.insertLast(3);
// list.insertLast(4);
list.remove(1);
utility.display(list);


