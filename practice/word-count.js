'use strict';

// Given a document, implement an algorithm to count the number of word occurrences.

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function wordCount(str) {
  const words = str.split(/\W/).filter(Boolean);
  const h = new Map();
  words.forEach(word => {
    if (h.has(word)) {
      h.set(word, h.get(word)+1);
    } else {
      h.set(word, 1);
    }
  });
  const result = [];
  h.forEach((value, key) => {
    result.push(key + ' = ' + value);
  });
  return result.join(', ');
}

// console.log(wordCount(`"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`));





