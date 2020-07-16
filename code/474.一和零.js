/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let len = strs.length;
  let dp = Array.from({ length: len + 1 }, () =>
    Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  );
  for (let i = 1; i <= len; i++) {
    let temp = countZeroAndOne(strs[i - 1]);
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        let zeros = temp[0];
        let ones = temp[1];
        dp[i][j][k] = dp[i - 1][j][k];
        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(
            dp[i - 1][j][k],
            dp[i - 1][j - zeros][k - ones] + 1
          );
        }
      }
    }
  }
  return dp[len][m][n];
};

function countZeroAndOne(s) {
  let temp = Array.from({ length: 2 }, () => 0);
  for (let i = 0; i < s.length; i++) {
    let ch = Number(s[i]);
    temp[ch]++;
  }
  return temp;
}

// @lc code=end
