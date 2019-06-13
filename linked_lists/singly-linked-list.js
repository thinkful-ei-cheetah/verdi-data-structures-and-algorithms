'use strict';

class _Node {
  constructor(value, next) {
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
}

const list = new SinglyLinked();
list.insertFirst(5);
list.insertFirst(10);
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