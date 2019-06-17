'use strict';
const SLL = require('../linked_lists/singly-linked-list');

class HashMap {
  constructor(initialCapacity=8){
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    return hash % this._capacity;
    // for (let i=start; i<start + this._capacity; i++) {
    //   const index = i % this._capacity;
    //   const slot = this._hashTable[index];
    //   if (slot === undefined || (slot.key === key && !slot.DELETED)) {
    //     return index;
    //   }
    // }
  }

  set(key, value) {
    const loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);

    const newValue = {
      key,
      value,
    };

    if (this._hashTable[index]) {
      this.length++;
      const list = this._hashTable[index];
      let currNode = list.head;
      while(currNode !== null) {
        if (currNode.value.key === key) {
          currNode.value.value = value;
          return;
        }
        currNode = currNode.next;
      }
      list.insertLast(newValue);
    } else {
      this.length++;
      const list = new SLL();
      list.insertFirst(newValue);
      this._hashTable[index] = list;
    }
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error('key error');
    }

    const list = this._hashTable[index];
    let currNode = list.head;
    while (currNode.next !== null) {
      if (currNode.value.key === key) {
        return currNode.value.value;
      }
      currNode = currNode.next;
    }
  }

  delete(key) {
    const index = this._findSlot(key);
    const list = this._hashTable[index];

    if (list === undefined) {
      throw new Error('Key error');
    }

    list.removeObj(key);
    this.length--;
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._hashTable = [];

    for (const list of oldSlots) {
      if (list !== undefined && list.head !== null) {
        let currNode = list.head;
        while (currNode) {
          this.set(currNode.value.key, currNode.value.value);
          currNode = currNode.next;
        }
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i=0; i<string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure has is unsigned - meaning non-negtive number. 
    return hash >>> 0;
  }
}

module.exports = HashMap;


