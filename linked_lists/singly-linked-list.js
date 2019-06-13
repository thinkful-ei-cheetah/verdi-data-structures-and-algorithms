'use strict';
const {
  display,
  count,
  isEmpty,
  findPrevious,
  findLast,
  thirdFromEnd,
  middleOfList,
} = require('./utility');

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

  insertAfter(item, nodeVal) {
    const newNode = new _Node(item);
    let currNode = this.head;
    
    while(currNode.next !== null && currNode.value !== nodeVal) {
      currNode = currNode.next;
    }
  
    const tail = currNode.next;
    currNode.next = newNode;
    newNode.next = tail;
  }

  insertAt(item, index) {
    // 10
    //   5->null = 10-> 5-> null
    const newNode = new _Node(item);

    let count = 0;
    let prevNode = this.head;
    let currNode = this.head;

    while(currNode.next !== null && count !== index) {
      prevNode = currNode;
      currNode = currNode.next;
      count++
    }
    if(count !== index) {
      console.log('No value found at that index')
      return;
    };

    if(this.head.next === null) {
      this.head = newNode;
      newNode.next = currNode;
      return;
    }
    
    prevNode.next = newNode;
    newNode.next = currNode;
  }
}

function reverse(list) {
  // 5->15->20
  // 5<-15<-20

  //   5-15-20
  // P C  N

  let prevNode = null;
  let currNode = list.head;
  let nextNode = currNode.next;

  // return prevNode;

  while(currNode.next !== null) {
    let temp = currNode.next;
    nextNode.next = currNode;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = temp;
  }

  return list;
}

// 4. Mystery Program
function WhatDoesThisProgramDo(lst) { 
  // 5 -> 10 -> 10 -> 15
  let current = lst.head;
  while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
          if (newNode.next.value === current.value) {
              newNode.next = newNode.next.next;
          }
          else {
              newNode = newNode.next;
          }
      }
      current = current.next;
  }
}

// This function loops through a linked list and removes duplicates
// Linear time complexity O(n)

const list = new SinglyLinked();
list.insertFirst(5);
list.insertLast(15);
list.insertLast(20);
display(list);
// reverse(list);
