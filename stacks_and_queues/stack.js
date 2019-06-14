'use strict';

//create a stack class that has push and pop

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new _Node(value, this.top);
  }

  pop() {
    const topNode = this.top;
    this.top = this.top.next;
    return topNode.value;
  }
}

module.exports = Stack;

const starTrek = new Stack();
starTrek.push('spock');
starTrek.push('bob');
starTrek.push('jim');

function peek(stack){
  return stack.top.value;
}

function isEmpty(stack){
  return (stack.top===null);
}

function display(stack) {
  if (isEmpty(stack)) return;
  let tempTop = stack.top;
  while (tempTop !== null) {
    console.log(tempTop.value);
    tempTop = tempTop.next;
  }
}


