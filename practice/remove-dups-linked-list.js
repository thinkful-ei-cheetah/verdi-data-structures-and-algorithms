// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

// 1-2-3-3-4-7-7-7-8-8-9

'use strict';
const SLL = require('../linked_lists/singly-linked-list');
const { display } = require('../linked_lists/utility');
const list = new SLL();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(3);
list.insertLast(4);
list.insertLast(7);
list.insertLast(7);
list.insertLast(7);
list.insertLast(8);
list.insertLast(8);
list.insertLast(9);

function removeDups(list) {
  let current = list.head;
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

display(removeDups(list));
