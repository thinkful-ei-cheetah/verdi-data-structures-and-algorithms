'use strict';

function factorial(num) {
  //base
  //if num is 0 return 0;
  //if num is 1 return 1;
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  //recursive
  //num * factor(num-1);
  return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(6));
