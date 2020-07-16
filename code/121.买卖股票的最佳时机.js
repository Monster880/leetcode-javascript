/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profit = 0
  var min = Number.MAX_VALUE
  for(let i=0;i<prices.length;i++){
    min = Math.min(min,prices[i])
    profit = Math.max(profit,prices[i]-min)
  }
  return profit
};
// @lc code=end

