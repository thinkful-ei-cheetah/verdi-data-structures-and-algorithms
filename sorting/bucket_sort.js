'use strict';

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// 3,8,5,9,7
//[0,1,2,3,4]
function bucketSort(arr, min, max) {
  const buckets = Array((max-min)+1).fill(0);
  
  let bucket;
  for (let i=0; i<arr.length; i++) {
    bucket = arr[i]-min;
    buckets[bucket] += 1; 
  }
  const result = [];
  for (let i=0; i<buckets.length; i++){
    let total = buckets[i];
    let num = i + min;
    for (let j=0; j<total; j++) {
      result.push(num);
    }
  }
  return result;
}

console.log(bucketSort([3,8,5,9,7,3,8,8], 3, 9));

// 0,3,8,5,9,7
//[0,1,2,3,5,7,9]
//[]