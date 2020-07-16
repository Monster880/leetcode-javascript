/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if(a == 0){
    return b
  }
  if(b == 0){
    return a
  }
  return getSum((a^b),(a&b)<<1)
};
// @lc code=end

