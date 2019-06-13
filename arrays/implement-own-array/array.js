'use strict';
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
  
  push(value) {
    if (this.length >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this.capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
}

module.exports = Array;