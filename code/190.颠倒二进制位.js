/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var ret = 0
  for(let i =0;i<32;i++){
    ret = (n&1) + (ret<<1)
    n = n >>1
  }
  ret = ret >>>0
  return ret
};
// @lc code=end

