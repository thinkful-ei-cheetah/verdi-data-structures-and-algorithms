'use strict';

function towersOfHanoi(discs) {
  // break
  // tower 3 has all disks and is sorted


  // recursive
  // disc moves to different tower if no smaller disc exist
  // biggest disc cannot move if on tower 3

  // tower 1 moves: 2 - 3
  // tower 2 moves: 3 - 1
  // tower 3 moves: 1 - 2

  
  // output: {towerOne: [1,2,3], towerTwo: [], towerThree: []}
  // output: {towerOne: [2,3], towerTwo: [1], towerThree: []}
  // output: {towerOne: [3], towerTwo: [1], towerThree: [2]}
  // output: {towerOne: [3], towerTwo: [], towerThree: [1,2]}
  // output: {towerOne: [1,3], towerTwo: [2], towerThree: []}
  // output: {towerOne: [3], towerTwo: [1,2], towerThree: []}
  // output: {towerOne: [], towerTwo: [1,2], towerThree: [3]}
  // output: {towerOne: [], towerTwo: [1,2], towerThree: [1,3]}
  // output: {towerOne: [2], towerTwo: [], towerThree: [1,3]}
  // output: {towerOne: [1,2], towerTwo: [], towerThree: [3]}
  // output: {towerOne: [2], towerTwo: [1], towerThree: [3]}
  // output: {towerOne: [], towerTwo: [1], towerThree: [2,3]}
  // output: {towerOne: [], towerTwo: [], towerThree: [1,2,3]}


}

// input: discs = integer (3,4,5)
// output: {towerOne: [2,3], towerTwo: [], towerThree: [1]}
// {towerOne: [3], towerTwo: [2], towerThree: [1]}

// no smaller integer can ever be before a larger
// array must always be sorted asc

// break case
// length of third array is all the discs and it is sorted
