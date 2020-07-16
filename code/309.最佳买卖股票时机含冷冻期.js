/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices == null || prices.length <= 1) {
    return 0;
  }
  let buy = [];
  let sell = [];
  buy[0] = -prices[0];
  buy[1] = Math.max(-prices[0], -prices[1]);
  sell[0] = 0;
  sell[1] = Math.max(0, prices[1] - prices[0]);
  for (let i = 2; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
    sell[i] = Math.max(sell[i - 1], prices[i] + buy[i - 1]);
  }
  return Math.max(sell[prices.length - 1], buy[prices.length - 1], 0);
};
// @lc code=end
