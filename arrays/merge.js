'use strict';

// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function merge(arr1, arr2) {
  let ptr1 = 0;
  let ptr2 = 0;
  let result = [];

  while (arr1[ptr1] && arr2[ptr2]) {
    if (arr1[ptr1] <= arr2[ptr2]) {
      result.push(arr1[ptr1]);
      ptr1++;
    } else {
      result.push(arr2[ptr2]);
      ptr2++;
    }
  }

  if (arr1[ptr1]) {
    result = result.concat(arr1.slice(ptr1));
  } else if (arr2[ptr2]) {
    result = result.concat(arr2.slice(ptr2));
  }

  return result;
}
const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];
console.log(merge(arr1, arr2));

// Big is Loglinear time O(nLogn)