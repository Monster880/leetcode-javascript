/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let count = 0;
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }
  return count;
};
// @lc code=end
