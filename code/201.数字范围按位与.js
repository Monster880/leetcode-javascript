/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let count = 0;
  while (m !== n) {
    m = m >> 1;
    n = n >> 1;
    count++;
  }
  return n << count;
};
// @lc code=end
