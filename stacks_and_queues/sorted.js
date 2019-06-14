'use strict';

const Stack = require('./stack');
const stack = new Stack();
stack.push(6);
stack.push(1);
stack.push(3);
stack.push(18);

//stack 1
//18-3-1-6 //1-6

//popped value 18
//peaked 3

//stack 2
//3


function sorted(unsorted) {
  const tempStack = new Stack();

  // poppped value from unsorted || tempStack
  // peek value from unsorted
  // peek value from tempStack

  
  let temp1;
  let temp2;
  while () {
    let temp1 = unsorted.pop();
    temp2 = unsorted.pop();

    if (temp1.value < temp2.value) {
      tempStack.push()
    }
  }

}