'use strict';

function triangleNum(num) {
  // 3 + 2 + 1

  // when num is 1 return 1
  if (num === 1) {
    return 1;
  }

  return num + triangleNum(num-1);
  
}

// triangleNum(1);
// triangleNum(2);
console.log(triangleNum(3));
console.log(triangleNum(4));

