'use strict';

// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

function findMaxSum(arr) {
  let sum = 0;
  let maxSum = 0;

  for (let k = 0; k < arr.length; k++) {
    sum = 0;
    for (let i = k; i < arr.length; i++) {
      sum += arr[i];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}
let array1 = [5, 7, -3, 5, -2, 1];
console.log(findMaxSum(array1));
// Solution is polynomial time of O(n^2)