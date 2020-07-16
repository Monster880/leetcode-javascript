/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [];
  for (let i = 0; i < m + 1; i++) {
    dp[i] = [];
    dp[i][0] = 0;
  }
  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = 0;
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      dp[i][j] = j === 1 ? 1 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m][n];
};
// @lc code=end
