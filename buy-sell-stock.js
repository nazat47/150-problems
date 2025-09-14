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
