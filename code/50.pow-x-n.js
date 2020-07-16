/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    x = parseFloat(1 / x);
    n = -n;
  }
  let result = 1;
  let subresult = x;
  for (let i = n; i > 0; i = parseInt(i / 2)) {
    if (i & (1 === 1)) {
      result = subresult * result;
    }
    subresult = subresult * subresult;
  }
  return result;
};
// @lc code=end
