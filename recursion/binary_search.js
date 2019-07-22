'use strict';

function binarySearch(sortedArray, searchValue, minIndex=0, maxIndex=sortedArray.length-1) {
  let currentElement, middleIndex;

  while (minIndex <= maxIndex) {
    // Find the value of the middle of the array
    middleIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = sortedArray[middleIndex];
      
    // It's the same as the value in the middle - we can return!
    if (currentElement === searchValue) {
      return middleIndex;
    }
    // Is the value less than the value in the middle of the array
    if (currentElement < searchValue) {
      return binarySearch(sortedArray, searchValue, middleIndex + 1, maxIndex);
    }
    // Is the value greater than the value in the middle of the array
    if (currentElement > searchValue) {
      return binarySearch(sortedArray, searchValue, minIndex, middleIndex - 1);
    }
  }

  return -1;
}

// const sortedArray = [1,2,4,5,10,12,44,89,99,304];
// console.log(binarySearch(sortedArray, 2));