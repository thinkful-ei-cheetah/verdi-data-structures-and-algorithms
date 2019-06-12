'use strict';

function isSorted(arr) {
  const sorted = [...arr].sort();
  for (let i=0; i<sorted.length; i++) {
    if (arr[i] !== sorted[i]) {
      return false;
    }
  }
  return true;
}

function move(from, to) {
  const disc = from.shift();
  to.unshift(disc);
}

function canMove(disc, to) {
  return !to.length || disc < to[0];
}

// function towersOfHanoi(discs, from, to, aux) {
//   if (!towers.length) {
//     towers = [[], [], []];
//     for (let i=1; i<=discs; i++) {
//       towers[0].push(i);
//     }
//     max = discs;
//   }

//   if (towers[2].length === discs && isSorted(towers[2])) {
//     return towers;
//   }

  
// }

// you have to accept that you can move n-1 number of disks to a given peg via another peg.  If you can accept that, the problem allows for subtasks of this routine.

function TOH(num, from, to, aux) {
  if (num === 1) {
    console.log(`moving disc 1 from ${from} to ${to}`);
    return;
  } else {
    // A to B via C
    TOH(num-1, from, aux, to);
    console.log(`moving disc ${num} from ${from} to ${to}`);
    // B to C via A
    TOH(num-1, aux, to, from);
  }
}

TOH(3, 'A', 'C', 'B');














