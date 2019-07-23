// Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.

// - Input: `"Dad gave mom a Tesla as a racecar"`
// - Output: `Dad, mom, racecar, 3 Palindromes`

'use strict';

function isPalidrome(str) {
  if (str.length === 1) return false;
  str = str.toLowerCase();
  let reversed = '';
  for (let i=str.length-1; i>=0; i--) {
    reversed += str[i];
  }
  return reversed === str;
}

function countPalidromes(str) {
  const words = str.split(' ').filter(word => isPalidrome(word));
  return words.join(', ') + `, ${words.length} Palidromes`;
}

console.log(countPalidromes('Dad gave mom a Tesla as a racecar'));