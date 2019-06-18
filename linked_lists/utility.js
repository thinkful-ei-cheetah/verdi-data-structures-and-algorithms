'use strict';

function display(list) {
  let results = '';
  let currentNode = list.head;
  if (!currentNode) {
    console.log('List is empty');
    return;
  }
  if (currentNode.next === null) {
    console.log(`${currentNode.value}->null`);
    return;
  }

  if (list.tail) {
    console.log(`head: ${list.head.value} head.next: ${list.head.next.value} | tail: ${list.tail.value} tail.prev: ${list.tail.prev.value}`);
  }

  while (currentNode.next !== null) {
    results += `${currentNode.value}->`;
    currentNode = currentNode.next;
  }
  results += `${currentNode.value}->null`;
  console.log(results);
}

function display2(list) {
  let results = '';
  let currentNode = list.head;
  if (!currentNode) {
    console.log('List is empty');
    return;
  }
  if (currentNode.next === null) {
    console.log(`${currentNode.value.value}->null`);
    return;
  }

  while (currentNode.next !== null) {
    results += `${currentNode.value.value}->`;
    currentNode = currentNode.next;
  }
  results += `${currentNode.value.value}->null`;
  console.log(results);
}

function count(list) {
  let size = 1;
  let currNode = list.head;
  if(!currNode) return null;
  if(currNode.next === null) {
    return size;
  }

  while(currNode.next !== null) {
    currNode = currNode.next;
    size++;
  }
  console.log(size);
  return size;
}

function isEmpty(list) {
  console.log(list.head === null);
  return list.head === null;
}

function findPrevious(list, nodeVal) {
  let currNode = list.head;
  let prevNode = list.head;

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
  console.log(currNode.value);
  return currNode.value; 
}

function thirdFromEnd(list) {
  let currNode = list.head;
  if(!currNode) return null;

  while(currNode.next && currNode.next.next && currNode.next.next.next !== null) {
    currNode = currNode.next;
  }

  if(!currNode.next || !currNode.next.next) {
    console.log('List is less than three items');
    return;
  }

  console.log(currNode.value)
  return currNode;
}

function middleOfList(list) {
  let currNode = list.head;
  let size = 0;

  if(!currNode) return null;
  if(!currNode.next) {
    console.log(currNode.value);
    return currNode;
  }

  while(currNode.next !== null) {
    currNode = currNode.next;
    size++;
  }

  let midpoint = Math.floor(size / 2);
  currNode = list.head;
  size = 0;
  while(size !== midpoint) {
    currNode = currNode.next;
    size++;
  }
  console.log(currNode.value);
  return currNode;
}

module.exports = {
  findLast,
  findPrevious,
  isEmpty,
  count,
  display,
  thirdFromEnd,
  middleOfList,
  display2
};