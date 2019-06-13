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

  remove(item) {
    if(!this.head) return null;
    if (this.head.value === item) {
      this.head = this.head.next;
      return; 
    }
    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    let result = '';

    while((currNode.value !== item) && (currNode.next !== null) ) {
      currNode = currNode.next;
    }
    result = currNode.value !== item ? 'Item not found' : `Result: ${JSON.stringify(currNode)}`;
    console.log(result);
  }

  insertBefore(item, nodeVal) {
    const newNode = new _Node(item);

    if (this.head.next === null) {
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
      return;
    }
    
    let currNode = this.head;
    while(currNode.next !== null && currNode.next.value !== nodeVal) {
      currNode = currNode.next;
    }

    const tail = currNode.next;
    currNode.next = newNode;
    newNode.next = tail;
  }
}

// Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.

const list = new SinglyLinked();
list.insertFirst(5);
// list.insertLast(10);
// list.insertLast(15);
// list.remove(15);
// list.find(10);
list.insertBefore(12, 5);
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