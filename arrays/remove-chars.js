'use strict';

// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function remove(str, remover) {
  let result  ='';
  let filterArr = [];

  for (let k = 0; k < remover.length; k++) {
    filterArr.push(remover[k]);
  }

  for (let i = 0; i < str.length; i++) {
    if (!filterArr.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
}

console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'bvhg'));

// O(n)