'use strict';
// 5. URLify a string
// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen
// Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

// function urlify(string) {
//   return string.split(' ').join('%20')
// }

// // O(n)

// console.log(urlify('tauhida parveen'))
// console.log(urlify('www.thinkful.com /tauh ida parv een'))

// Question 6
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

// function myFilter(arr, filter) {
//   const results = [];
//   for (let i=0; i<arr.length; i++) {
//     let num = arr[i];
//     if (filter(num)) {
//       results.push(num);
//     }
//   }
//   return results;
// }
// const testOne = [1,2,4,9,99];
// const results = myFilter(testOne, (num) => num < 5 );
// console.log(results);

// 7. max sum in array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

// function findMaxSum(arr) {
//   let sum = 0;
//   let maxSum = 0;

//   for (let k = 0; k < arr.length; k++) {
//     sum = 0
//     for (let i = k; i < arr.length; i++) {
//       sum += arr[i]
//       if (sum > maxSum) {
//         maxSum = sum;
//       }
//     }
//   }

//   return maxSum
// }
// let array1 = [5, 7, -3, 5, -2, 1]
// console.log(findMaxSum(array1))
// Solution is polynomial time of O(n^2)

// Merge Arrays
// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]


// [1, 3, 6, 8, 11] - [2, 3, 5, 100, 110]
// 
// [1,2,3,3,5,6,8,8,9,10]

// function merge(arr1, arr2) {
//   let ptr1 = 0;
//   let ptr2 = 0;
//   let result = [];

//   while (arr1[ptr1] && arr2[ptr2]) {
//     if (arr1[ptr1] <= arr2[ptr2]) {
//       result.push(arr1[ptr1]);
//       ptr1++;
//     } else {
//       result.push(arr2[ptr2]);
//       ptr2++;
//     }
//   }

//   if (arr1[ptr1]) {
//     result = result.concat(arr1.slice(ptr1));
//   } else if (arr2[ptr2]) {
//     result = result.concat(arr2.slice(ptr2));
//   }

//   return result;
// }
// const arr1 = [1, 3, 6, 8, 11];
// const arr2 = [2, 3, 5, 8, 9, 10];
// console.log(merge(arr1, arr2));

// Big is Loglinear time O(nLogn)


// 9. remove characters 

// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function remove(str, remover) {
  let result  ='';
  let filterArr = [];

  for (let k = 0; k < remover.length; k++) {
    filterArr.push(remover[k]);
  }

  for (let i = 0; i < str.length; i++) {
    if (!filterArr.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
}

// console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'bvhg'))

// O(n)



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

// console.log(products([1,3,9,4]));
