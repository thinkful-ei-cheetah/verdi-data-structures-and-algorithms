'use strict';

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function isAllowed(result) {
  if (!result || result === '*') {
    return false;
  }
  return true;
}

function nextMove(maze, index, move) {
  const indexCopy = [...index];

  if (move === 'R') {
    indexCopy[1] = indexCopy[1] + 1;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {move: 'R', isValid: isAllowed(result), coord: indexCopy, inverse: 'L', priority: 1};

  } else if (move === 'L') {
    indexCopy[1] = indexCopy[1] - 1;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {move: 'L', isValid: isAllowed(result), coord: indexCopy, inverse: 'R', priority: 3};

  } else if (move === 'D') {
    indexCopy[0] = indexCopy[0] + 1;
    if (!maze[indexCopy[0]]) return false;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {move: 'D', isValid: isAllowed(result), coord: indexCopy, inverse: 'U', priority: 2};

  } else if (move === 'U') {
    indexCopy[0] = indexCopy[0] - 1;
    if (!maze[indexCopy[0]]) return false;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {move: 'U', isValid: isAllowed(result), coord: indexCopy, inverse: 'D', priority: 4};
  }
}

function escapeMaze(maze, index=[0,0], prevMove=null) {
  if (maze[index[0]][index[1]] === 'e') {
    return '';
  }

  // lookahead and see if valid move
  let allMoves = ['R', 'L', 'U', 'D'];
  allMoves = allMoves.filter(move => move !== prevMove);
  
  const results = allMoves.map(move => nextMove(maze, index, move));
  const result = results.sort((a,b) => (a.priority > b.priority) ? 1 : -1).find(result => result.isValid);
  
  return result.move + escapeMaze(maze, result.coord, result.inverse);
}

console.log(escapeMaze(maze));

