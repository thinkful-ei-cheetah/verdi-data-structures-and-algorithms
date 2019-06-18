'use strict';

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
}
// 3,1,4,6,9,2,5,7
// const tree = new BST();
// tree.insert(3);
// tree.insert(1);
// tree.insert(4);
// tree.insert(6);
// tree.insert(9);
// tree.insert(2);
// tree.insert(5);
// tree.insert(7);


module.exports = BST;