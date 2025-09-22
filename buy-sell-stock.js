// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the 
// future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfit(prices) {
  if (!prices || prices.length <= 1) return 0;

  let buy = [];
  let sell = [];
  let rest = [];
  buy[0] = -prices[0];
  sell[0] = 0;
  rest[0] = 0;

  for (let i = 1; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], rest[i - 1] - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    rest[i] = Math.max(sell[i - 1], rest[i - 1]);
  }
  return Math.max(sell[prices.length - 1], rest[prices.length - 1]);
}

console.log(maxProfit([1, 2, 3, 0, 2])); 
