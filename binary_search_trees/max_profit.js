'use strict';

// The share price for a company over a week's trading is as follows: 
// [128, 97, 121, 123, 98, 97, 105]
// If you had to buy shares in the company on a particular day, and sell the shares on a following day, write an algorithm to work out what the maximum profit you could make would be.

function maxProfit(arr) {
  let profit = -Infinity;
  let buy = arr[0];
  let currentPrice, currentProfit;

  for (let i=1; i<arr.length; i++) {
    currentPrice = arr[i];
    currentProfit = currentPrice - buy;

    if (currentProfit > profit) {
      profit = currentProfit;
    }
    if (currentPrice < buy) {
      buy = currentPrice;
    }
  }
  
  return profit;
}

// console.log(maxProfit([128,97,121,123,98,97,105]));
// console.log(maxProfit([100, 80, 70, 105, 160, 80]));
 
//                 p
//      -31  24    26   1   0   8
// [128, 97, 121, 123, 98, 97, 105]
//       b

