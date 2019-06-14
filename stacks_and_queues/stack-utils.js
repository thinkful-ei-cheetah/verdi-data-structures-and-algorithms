'use strict';

function peek(stack){
  if (stack.top) {
    return stack.top.value;
  }
}

function isEmpty(stack){
  return stack.top === null;
}

function display(stack) {
  if (isEmpty(stack)) return;
  let tempTop = stack.top;
  while (tempTop !== null) {
    console.log(tempTop.value);
    tempTop = tempTop.next;
  }
}

module.exports = {
  peek,
  isEmpty,
  display,
};