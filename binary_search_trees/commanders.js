'use strict';

const BST = require('./bst');

//               Captain Picard
//              /                \
//     Commander Riker       Commander Data
//       /         \               \
//  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//  Worf        LaForge            Crusher
//    /                           /
// Lieutenant                  Lieutenant
// security-officer            Selar

// Officers with more experience are listed on the list side of the tree first

// Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

const orgTree = new BST('Captain Picard');
orgTree.left = new BST('Commander Riker');
orgTree.left.left = new BST('Lt. Cmdr. Worf');
orgTree.left.right = new BST('Lt. Cmdr. LaForge');
orgTree.left.left.left = new BST('Lieutenant security-officer');

orgTree.right = new BST('Commander Data');
orgTree.right.right = new BST('Lt. Cmdr. Crusher');
orgTree.right.right.left = new BST('Lieutenant Selar');

console.log(orgTree.bfs());