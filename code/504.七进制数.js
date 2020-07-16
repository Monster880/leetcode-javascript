/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (!num) return num.toString();
  let flag = true;
  if (num < 0) {
    flag = false;
    num = -num;
  }
  let res = "";
  while (num !== 0) {
    res = res + (num % 7).toString();
    num = Math.floor(num / 7);
  }
  if (!flag) {
    res = res + "-";
  }
  return res.split("").reverse().join("");
};
// @lc code=end
