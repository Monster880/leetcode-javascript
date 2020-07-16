/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let str = strs[0];
  if (!str) {
    return "";
  }
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let flag = strs.every((item) => item[i] == str[i]);
    if (flag) {
      res += str[i];
    } else {
      break;
    }
  }
  return res;
};
// @lc code=end
