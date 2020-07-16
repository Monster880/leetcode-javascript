/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const count = new Set(candies)
  return Math.min(count.size,(candies.length >>1))
};
// @lc code=end

