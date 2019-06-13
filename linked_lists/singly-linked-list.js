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

  remove(item) { // 5 => 10 => 15  = 15
    if(!this.head) return null 
    if (this.head.value === item) {
      this.head = this.head.next
      return 
    }
    let currNode = this.head
    let prevNode = this.head

    while((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode
      currNode = currNode.next
    }
    if(currNode === null) {
      console.log('Item not found')
      return
    }
    prevNode.next = currNode.next
  }

  find(item) {
    let currNode = this.head
    let result = ''

    while((currNode.value !== item) && (currNode.next !== null) ) {
      currNode = currNode.next
    }
    result = currNode.value !== item ? 'Item not found' : `Result: ${JSON.stringify(currNode)}`
    console.log(result)
  }
}

const list = new SinglyLinked();
list.insertFirst(5);
list.insertLast(10);
list.insertLast(15);
list.remove(15);
list.find(10)
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