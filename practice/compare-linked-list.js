'use strict';
const SLL = require('../linked_lists/singly-linked-list');

// Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
// - Output: `-1`

function compare(list1, list2) {
  if (!list1.head || !list2.head) return null;

  let list1Node = list1.head;
  let list2Node = list2.head;
  while (list1Node && list2Node) {
    if (list1Node.value.toLowerCase() < list2Node.value.toLowerCase()) return -1;
    if (list1Node.value.toLowerCase() > list2Node.value.toLowerCase()) return 1;
    list1Node = list1Node.next;
    list2Node = list2Node.next;
  }

  if (!list1Node.next && !list2Node.next) return 0;
  if (!list1Node.next && list2Node.next) return -1;
  if (list1Node.next && !list2Node.next) return 1;
}

const list1 = new SLL();
list1.insertLast('B');
list1.insertLast('i');
list1.insertLast('l');
list1.insertLast('b');
list1.insertLast('o');
list1.insertLast('a');

const list2 = new SLL();
list2.insertLast('B');
list2.insertLast('i');
list2.insertLast('l');
list2.insertLast('b');
list2.insertLast('o');
list2.insertLast('b');

console.log(compare(list1, list2));

