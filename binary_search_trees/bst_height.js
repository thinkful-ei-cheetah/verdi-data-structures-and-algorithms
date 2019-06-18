'use strict';
const BST = require('./bst');

function BSTHeight(tree) {
  if (!tree.key) return 0;
  
  let left = 0, right = 0;

  if (!tree.left && !tree.right) {
    return 1;
  }
  
  if (tree.left) {
    left = BSTHeight(tree.left);
  }

  if (tree.right) {
    right = BSTHeight(tree.right);
  }

  return Math.max(left, right) + 1;
}

const tree = new BST();
const foo = new BST();
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);
tree.insert(2);
tree.insert(5);
tree.insert(7);

console.log(BSTHeight(tree));
console.log(BSTHeight(foo));
