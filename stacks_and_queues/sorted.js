'use strict';

const Stack = require('./stack');
const utils = require('./stack-utils');
const stack = new Stack();
stack.push(6);
stack.push(1);
stack.push(3);
stack.push(18);
stack.push(4);
stack.push(499);

//stack 1
//6-1-3-18-4-499

//temp

//tempStack
//


function sort(unsorted) {
  const tempStack = new Stack();

  let temp;
  while (unsorted.top !== null) {
    temp = unsorted.pop();
    while (tempStack.top !== null && tempStack.top.value > temp) {
      unsorted.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  return tempStack;
}

utils.display(stack);
const sorted = sort(stack);
utils.display(sorted);