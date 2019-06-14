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

const starTrek = new Stack();
starTrek.push('spock');
starTrek.push('bob');
starTrek.push('jim');
// console.log(JSON.stringify(starTrek));

function peek(stack){
    return stack.top.value;
 }

 function isEmpty(stack){
    return (stack.top===null);
 }

 function display(stack) {
    if (isEmpty(stack))
        return;
    let tempTop = stack.top;
   while (tempTop !== null)
   {
        console.log(tempTop.value);
        tempTop = tempTop.next;
   }
 }

 display(starTrek);

