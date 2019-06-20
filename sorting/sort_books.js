'use strict';
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and them implement your algorithm.

// ['a', 'ab', 'ccc'] - ['def', 'ace']
function mergeStrArrays(arr1, arr2) {
  let arr1Idx = 0;
  let arr2Idx = 0;
  let result = [];

  while (arr1[arr1Idx] && arr2[arr2Idx]) {
    let str1 = arr1[arr1Idx].toLowerCase();
    let str2 = arr2[arr2Idx].toLowerCase();
    let str1Ptr = 0;
    let str2Ptr = 0;
    let compare = 0;
    
    while (str1[str1Ptr] && str2[str2Ptr]) {
      compare = str1[str1Ptr].localeCompare(str2[str2Ptr]);
      if (compare !== 0) {
        break;
      } else {
        str1Ptr++;
        str2Ptr++;
      }
    }

    if (compare === -1) {
      result.push(arr1[arr1Idx]);
      arr1Idx++;
    } else if (compare === 1) {
      result.push(arr2[arr2Idx]);
      arr2Idx++;
    } else {
      if (!str1[str1Ptr]) { // strings were tied but this word is shorter
        result.push(arr1[arr1Idx]);
        arr1Idx++;
      } else {
        result.push(arr2[arr2Idx]);
        arr2Idx++;
      }
    }
  }
  
  if (arr1[arr1Idx]) {
    result = result.concat(arr1.slice(arr1Idx));
  } else if (arr2[arr2Idx]) {
    result = result.concat(arr2.slice(arr2Idx));
  }
  return result;
}

function bookSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length/2);
  let left = bookSort(arr.slice(0, middle));
  let right = bookSort(arr.slice(middle));

  return mergeStrArrays(left, right);
}

let books = [
  'To Kill a Mockingbird',
  '1984',
  'Harry Potter and the Philosopher\'s Stone',
  'The Lord of the Rings',
  'The Great Gatsby',
  'Pride and Prejudice',
  'The Diary Of A Young Girl',
  'The Book Thief',
];

console.log(bookSort(books));
