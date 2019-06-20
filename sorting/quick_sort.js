'use strict';

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// 9,8,6,4,2,7,1,3
function partition(arr, start, end) {
  // go until you find a value less than pivot
  // swap the value with the pivot pointer
  // increment the pivot pointer
  // at the end swap pivot with pivot pointer
  const pivot = arr[end-1];
  let pivotPtr = start;
  let num;
  for (let i=start; i<end-1; i++) {
    num = arr[i];
    if (num <= pivot) {
      swap(arr, pivotPtr, i);
      pivotPtr++;
    }
  }
  swap(arr, pivotPtr, end-1);
  return pivotPtr;
}

// console.log(partition([9,8,6,4,2,7,1,3]));

function quickSort(arr, start=0, end=arr.length) {
  if (start >= end) {
    return arr;
  }

  let pivot = partition(arr, start, end);
  arr = quickSort(arr, start, pivot);
  arr = quickSort(arr, pivot+1, end);
  return arr;
}

// console.log(quickSort([9,8,6,4,2,7,1,3]));