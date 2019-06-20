'use strict';

// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function shuffle(arr) {
  let random;

  for (let i=0; i<arr.length; i++) {
    random = Math.floor(Math.random() * arr.length);
    swap(arr, i, random);
  }
  return arr;
}

console.log(shuffle([1,2,3,4,5,6,7]));