'use strict';

//3,5,7  - 2,4,9,11
function merge(arr1, arr2) {
  let arr1Idx = 0;
  let arr2Idx = 0;
  let result = [];

  while (arr1[arr1Idx] && arr2[arr2Idx]) {
    if (arr1[arr1Idx] < arr2[arr2Idx]) {
      result.push(arr1[arr1Idx]);
      arr1Idx++;
    } else {
      result.push(arr2[arr2Idx]);
      arr2Idx++;
    }
  }

  if (arr1[arr1Idx]) {
    result = result.concat(arr1.slice(arr1Idx));
  } else if (arr2[arr2Idx]) {
    result = result.concat(arr2.slice(arr2Idx));
  }
  return result;
}

//10,5,8,2,7
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

console.log(mergeSort([10,5,8,2,7]));


module.exports = {
  mergeSort,
  merge,
};
