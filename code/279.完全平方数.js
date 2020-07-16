/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n <= 0) {
    return 0;
  }
  let dp = Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (j * j <= i) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }
  }
  return dp[n];
};
// @lc code=end
