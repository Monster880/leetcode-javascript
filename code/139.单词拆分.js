/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length + 1).fill(0);
  dp[0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let word of wordDict) {
      if (dp[i - word.length] && i >= word.length) {
        if (s.substring(i - word.length, i) == word) {
          dp[i] = true;
        }
      }
    }
  }
  return dp[s.length];
};
// @lc code=end
