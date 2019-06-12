'use strict';
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }
}

module.exports = Array;