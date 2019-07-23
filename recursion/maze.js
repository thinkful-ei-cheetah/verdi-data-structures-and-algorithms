'use strict';

let maze = [
  ['v', 'v', 'v', '*', ' ', ' ', ' '],
  ['*', '*', 'v', '*', ' ', '*', ' '],
  [' ', ' ', 'v', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escapeMaze(maze, row=0, col=0, moves='') {
  // break cases
  // final is when value === 'e'
  if (maze[row] && maze[row][col] && maze[row][col] === 'e') {
    return moves;
  }

  // do not advance
  // when value is undef or a '*' or visited
  if (!maze[row] || !maze[row][col] || maze[row][col] === '*' || maze[row][col] === 'v') {
    return  false;
  }

  //sub routine
  // move and mark as visited
  // running through all scenarios every time
  maze[row][col] = 'v';
  escapeMaze(maze, row+1, col, 'R'+moves); // move right
  escapeMaze(maze, row-1, col, 'L'+moves); // move left
  escapeMaze(maze, row, col+1, 'D'+moves); // move down
  escapeMaze(maze, row, col-1, 'U'+moves); // move up
}

console.log(escapeMaze(maze));