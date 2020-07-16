/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor === 1) return dividend;
  const isPositive = dividend > 0 === divisor > 0 ? 1 : -1;
  let count = generate(Math.abs(dividend), Math.abs(divisor));
  const MAX_INTEGER = Math.pow(2, 31);
  if (count < -MAX_INTEGER || count > MAX_INTEGER - 1) {
    return MAX_INTEGER - 1;
  }
  return count * isPositive;
};

function generate(dividend, divisor) {
  if (divisor === 1) return dividend;
  else if (dividend < divisor) return 0;
  else if (dividend === divisor) return 1;
  let acc = 2 * divisor;
  let count = 1;
  while (dividend > acc) {
    count += count;
    acc += acc;
  }
  return count + generate(Math.floor(dividend - acc / 2), divisor);
}

// @lc code=end
