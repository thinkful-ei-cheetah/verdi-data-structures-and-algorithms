'use strict';

let maze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']];
let maze2 = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//RRDDRRRRDD

function isOver(maze, index) {
  return maze[index[0]][index[1]] === 'e';
}

function inValid(maze, index) {
  return maze[index[0]][index[1]] || maze[index[0]][index[1]] === '*';
}

function moveRight(index) {
  return index[1] + 1;
}

function moveLeft(index) {
  return index[1] - 1;
}

function moveUp(index) {
  return index[0] + 1;
}

function moveDown(index) {
  return index[0] + 1;
}

function escapeMaze(maze, index = [0, 0], turn = 0) {
  let move = '';

  function esc_rec(maze, index, turn) {
    if (isOver(maze, index)) {
      return '';
    }

    if (inValid(maze, index)) {
      let temp = move.split('');
      let prevMove = temp.pop();
      move = temp.join('');

      if (prevMove === 'R') {
        index[1] = index[1] - 1;
      } else {
        index[0] = index[0] - 1;
      }
      return esc_rec(maze, index, turn);
    }

    if (turn % 2 === 0) {
      move += 'R';
      index[1] = index[1] + 1;
    } else if (turn % 2 === 1) {
      move += 'D';
      index[0] = index[0] + 1;
    }

    return move + esc_rec(maze, index, turn + 1);
  }

  esc_rec(maze, index, turn);
  return move;
}

escapeMaze(maze);
escapeMaze(maze2);
