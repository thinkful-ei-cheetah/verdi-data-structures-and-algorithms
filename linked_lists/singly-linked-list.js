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

const list = new SinglyLinked();
list.insertFirst(5);
list.insertLast(15);
list.insertLast(20);
display(list);
reverse(list);
display(list);
// list.remove(15);
// list.find(10);
// list.insertBefore(0, 5);
// list.insertAfter(20, 5);
// list.insertAt(10, 1);

// count(list)
// isEmpty(list);
// findPrevious(list, 15);
// findLast(list);

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
    currNode.next = prevNode
    prevNode = currNode;
    currNode = temp;
  }

  return list;
}

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

function count(list) {
  let size = 1
  let currNode = list.head;
  if(!currNode) return null;
  if(currNode.next === null) {
    return size;
  }

  while(currNode.next !== null) {
    currNode = currNode.next;
    size++
  }
  console.log(size)
  return size;
}

function isEmpty(list) {
  console.log(list.head === null);
  return list.head === null;
}

function findPrevious(list, nodeVal) {
  // 5 -> 15 -> 20 -> null
  //            15 => 5 
  let currNode = list.head
  let prevNode = list.head

  while(currNode.next !== null && currNode.value !== nodeVal) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  if(nodeVal !== currNode.value) {
    console.log('Node value does not exist');
    return;
  }
  console.log(prevNode.value);
  return prevNode.value;
}

function findLast(list) {
  let currNode = list.head;

  while(currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log(currNode.value)
  return currNode.value; 
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

