/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (x + y < z) return false;
  if (z === 0) return true;
  if (x === 0) return y === z;
  if (y === 0) return x === z;
  function GCD(a, b) {
    if (b === 0) return a;
    return GCD(b, a % b);
  }
  return z % GCD(x, y) === 0;
};
// @lc code=end
