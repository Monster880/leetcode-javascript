/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  function generate(l, r, str) {
    if (l === n && r === n) {
      res.push(str);
    }
    if (l < n) {
      generate(l + 1, r, str + "(");
    }
    if (r < l) {
      generate(l, r + 1, str + ")");
    }
  }

  generate(0, 0, "");
  return res;
};
// @lc code=end
