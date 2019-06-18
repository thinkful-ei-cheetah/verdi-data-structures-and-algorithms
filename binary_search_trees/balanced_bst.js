'use strict';
const BST = require('./bst');

function balancedBST(tree) {
  let leftHeight = 0;
  let rightHeight = 0;

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

  leftHeight = BSTHeight(tree.left);
  rightHeight = BSTHeight(tree.right);
  return leftHeight === rightHeight;
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

console.log(balancedBST(tree));

const tree2 = new BST();
tree2.insert(3);
tree2.insert(1);
tree2.insert(4);
tree2.insert(2);
tree2.insert(5);

console.log(balancedBST(tree2));
