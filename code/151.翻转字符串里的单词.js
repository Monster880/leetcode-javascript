/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = s.split(" ").filter((v) => v !== "");
  return res.reverse().join(" ");
};
// @lc code=end
