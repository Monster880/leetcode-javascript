/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (!num) {
    return "0";
  }
  let res = "";
  const tmp = "0123456789abcdef";
  while (num && res.length < 8) {
    res = tmp[num & 15] + res;
    num >>= 4;
  }
  return res;
};
// @lc code=end
