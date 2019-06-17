'use strict';

// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: 
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

function normalize(word) {
  let chars = word.split('');
  return chars.sort().join('');
}

function groupAnagrams(words) {
  const hash = new Map();
  words.forEach(word => {
    let normalizeWord = normalize(word);
    if (hash.has(normalizeWord)) {
      let values = hash.get(normalizeWord);
      values.push(word);
    } else {
      hash.set(normalizeWord, [word]);
    }
  });
  
  return [...hash.values()];
}

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));