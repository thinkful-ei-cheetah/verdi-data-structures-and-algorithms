'use strict';

const utility = require('./utility')

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

}

let list = new DLL();
list.insertFirst(2);
list.insertFirst(1);
list.insertLast(3);
utility.display(list);


