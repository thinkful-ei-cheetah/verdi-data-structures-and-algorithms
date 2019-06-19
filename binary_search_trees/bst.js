'use strict';
const Queue = require('../stacks_and_queues/queue');

class BST {
  constructor(key=null, value=null, parent=null, count=0) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.count = count;
  }

  insert(key) {
    if (this.key === null) {
      this.key = key;
      this.count++;
    } else if (key > this.key) { // go right
      if (this.right === null) {
        this.right = new BST(key, null, this, 1);
      } else {
        this.right.insert(key);
      }
    } else if (key < this.key) { // go left
      if (this.left === null) {
        this.left = new BST(key, null, this, 1);
      } else {
        this.left.insert(key);
      }
    } else if (key === this.key) {
      // tied value
      this.count++;
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) { // has L and R nodes, find replacement
        const successorNode = this.right._findMin();
        this.key = successorNode.key;
        this.value = successorNode.value;
        this.count = successorNode.count;
        successorNode.remove(successorNode.key);
      } else if (this.left) { // has a left node, replace it with it
        this._replaceWith(this.left);
      } else if (this.right) { // has a right node, replace it with it
        this._replaceWith(this.right);
      } else { // leaf node, remove parent's ref to it
        this._replaceWith(null);
      }
    } else if (key > this.key && this.right) { // move to the right and repeat
      this.right.remove(key);
    } else if (key < this.key && this.left) { // move to the left and repeat
      this.left.remove(key);
    } else {
      throw new Error('key error');
    }
  }

  find(key) {
    if (key === this.key) {
      return this;
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else {
      return ('key not found');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this.parent.right === this) {
        this.parent.right = node;
      } else if (this.parent.left === this) {
        this.parent.left = node;
      }
    } else { // should it ever have a node if it gets to this point?
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.right = node.right;
        this.left = node.left;
        this.count = node.count;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
        this.count = 0;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  inOrder(result=[]) {
    if (!this.left && !this.right) {
      return result.push(this.key);
    }
    if (this.left) {
      this.left.inOrder(result);
    }
    result.push(this.key);
    if (this.right) {
      this.right.inOrder(result);
    }
    return result;
  }

  preOrder(result=[]) {
    if (!this.left && !this.right) {
      return result.push(this.key);
    }
    result.push(this.key);
    if (this.left) {
      this.left.preOrder(result);
    }
    if (this.right) {
      this.right.preOrder(result);
    }
    return result;
  }

  postOrder(result=[]) {
    if (!this.left && !this.right) {
      return result.push(this.key);
    }
    
    if (this.left) {
      this.left.postOrder(result);
    }
    if (this.right) {
      this.right.postOrder(result);
    }
    result.push(this.key);
    return result;
  }

  bfs(result=[]) {
    const queue = new Queue();
    queue.enqueue(this);
    let node;
    
    while (queue.length) {
      node = queue.dequeue();
      result.push(node.key);

      if (node.left) {
        queue.enqueue(node.left);
      }
      
      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    return result;
  }

  
}
// const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
const data = [15,20,25,16,10,12,8];
const tree = new BST();
data.forEach(num => tree.insert(num));

// bfs
// [ 15, 10, 20, 8, 12, 16, 25 ] 

// pre order
// 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// in order
// 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// post order
// 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

module.exports = BST;