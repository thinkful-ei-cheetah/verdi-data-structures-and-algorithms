'use strict';
// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen
// Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function urlify(string) {
  return string.split(' ').join('%20');
}

// O(n)

console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));