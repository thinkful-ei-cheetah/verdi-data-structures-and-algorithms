'use strict';

function countSheep(numOfSheep) {
  //count down to 0 as Base Case.
  if (numOfSheep === 0) {
    console.log(`All sheep jumped over the fence.`);
    return;
  }

  console.log(`${numOfSheep}: Another sheep jumped over the fence`);
  //pass numOfSheep minus 1 to recursive case.
  numOfSheep -= 1;
  countSheep(numOfSheep);
}

countSheep(3);
