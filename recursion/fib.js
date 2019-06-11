'use strict';

function fib(num) {
  //break
  // num is < 1 return 'can't do this'
  // num is 1 or 2 return 1
  if (num <= 0) {
    return 'number must be positive';
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    return fib(num-2) + fib(num-1);
  }
}
// 1  2  3  4  5  6  7, 8
// 1, 1, 2, 3, 5, 8, 13, 21 

console.log(fib(8));
console.log(fib(2));
console.log(fib(1));
console.log(fib(0));
