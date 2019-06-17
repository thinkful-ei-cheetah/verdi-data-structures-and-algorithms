'use strict';

// Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.

function canBePalindrome(str) {
  const hash = new Map();
  for (let i=0; i<str.length; i++) {
    if (hash.has(str[i])) {
      let currentValue = hash.get(str[i]);
      hash.set(str[i], currentValue+1);
    } else {
      hash.set(str[i], 1);
    }
  }
  if (str.length % 2 === 0) {
    return hash.size === str.length/2;
  } else {
    return hash.size === Math.ceil(str.length/2);
  }
}

console.log(canBePalindrome('redder'));
console.log(canBePalindrome('red'));
console.log(canBePalindrome('aabbcc'));
// console.log(canBePalindrome('rreedd'));
// console.log(canBePalindrome('mom'));
// console.log(canBePalindrome('north'));
// console.log(canBePalindrome('solsos'));