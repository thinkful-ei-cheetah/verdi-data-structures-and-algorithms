'use strict';

// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function myFilter(arr, filter) {
  const results = [];
  for (let i=0; i<arr.length; i++) {
    let num = arr[i];
    if (filter(num)) {
      results.push(num);
    }
  }
  return results;
}
const testOne = [1,2,4,9,99];
const results = myFilter(testOne, (num) => num < 5 );
console.log(results);