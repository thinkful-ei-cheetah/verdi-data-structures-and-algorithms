// Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. If no number in the list is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

'use strict';

function findMode(arr) {
  const hash = {};
  arr.forEach(num => {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  });

  let max = 1;
  let maxValue;
  for (const [key, value] of Object.entries(hash)) {
    if (value > max) {
      max = value;
      maxValue = key;
    }
  }
  if (max === 1) {
    return 'there is no mode for this list of numbers';
  } else {
    return `Mode = ${maxValue}, Frequency of mode = ${max}`;
  }
}

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]));