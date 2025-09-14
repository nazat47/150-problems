//problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfitFromBuySell(prices) {
  let maxProfit = 0;
  let minBuy = Number.MAX_VALUE;
  for (const price of prices) {
    minBuy = Math.min(minBuy, price);
    maxProfit = Math.max(maxProfit, price - minBuy);
  }
  return maxProfit;
}

console.log(maxProfitFromBuySell([7, 1, 5, 3, 6, 4]));
