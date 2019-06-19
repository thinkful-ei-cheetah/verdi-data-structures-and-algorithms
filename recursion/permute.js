'use strict';

// find all permutations of a string
// input: '123'
// output: ['123', '132', '213', '231', '312', '321']

function permute(str) {
  if (str.length === 1) return [str];
  let result = [];

  for (let i=0; i<str.length; i++) {
    let first = str[i];
    let rest = str.substring(0, i) + str.substring(i + 1);

    let substrings = permute(rest);
    result = result.concat(substrings.map(substring => first + substring));
  }

  return result;
}

console.log(permute('123'));