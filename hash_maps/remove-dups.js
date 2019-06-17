'use strict';

function removeDups(str) {
  const hash = new Map();
  let result = '';
  for (let i=0; i<str.length; i++) {
    if (!hash.has(str[i])) {
      result += str[i];
      hash.set(str[i], null);
    }
  }
  return result;
}

console.log(removeDups('google all that you think can think of'));
console.log(removeDups('google'));
