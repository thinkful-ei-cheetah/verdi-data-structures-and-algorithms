'use strict';
const BST = require('./bst');

// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

function validBST(tree, min=-Infinity, max=Infinity) {
  if (!tree) return 'empty tree';
  if (tree.key < min || tree.key > max) return false;

  if (tree.left && !validBST(tree.left, min, tree.key)) return false;
  if (tree.right && !validBST(tree.right, tree.key, max)) return false;
  return true;
}

const tree = new BST();
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);
tree.insert(2);
tree.insert(5);
tree.insert(7);

const BT = new BST(10);
BT.left = new BST(8, null, BT);
BT.right = new BST(3, null, BT);


console.log(validBST(tree));
console.log(validBST(BT));

