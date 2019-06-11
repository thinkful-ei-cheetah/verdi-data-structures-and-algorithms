'use strict';
function stringSplitter(string, splitter) {
  //loop through until you match splitter, then return up to that point.
  //base case

  //if seperator. skip.
  //if empty return empty string.
  if (string.length === 0) {
    return '';
  }

  if (string[0] === splitter) {
    return stringSplitter(string.slice(1), splitter);
  }
  //recursion case
  //take first element plus pass rest of string and splitter.
  let current = string[0];
  return current + stringSplitter(string.slice(1), splitter);
}

console.log(stringSplitter('20,20,2020', ','));
