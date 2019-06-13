'use strict';

class _Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinked {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    const node = new _Node(value);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
}

const list = new SinglyLinked();
list.insertFirst(5);
list.insertFirst(10);
list.insertLast(15);
display(list);

function display(list) {
  let results = '';
  let currentNode = list.head;
  if (currentNode.next === null) {
    console.log(`${currentNode.value}->null`);
    return;
  }

  while (currentNode.next !== null) {
    results += `${currentNode.value}->`;
    currentNode = currentNode.next;
  }
  results += `${currentNode.value}->null`;
  console.log(results);
}