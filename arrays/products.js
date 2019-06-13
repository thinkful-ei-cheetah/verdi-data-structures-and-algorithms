'use strict';

// Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function products(arr) {
  const maxProduct = arr.reduce((acc, val) => {
    acc *= val;
    return acc;
  });
  
  return arr.map(num => maxProduct / num);
}

console.log(products([1,3,9,4]));

// O(n)