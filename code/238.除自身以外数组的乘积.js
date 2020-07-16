/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  for (let i = 0, temp = 1; i < nums.length; i++) {
    res[i] = temp;
    temp = temp * nums[i];
  }
  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    res[i] = res[i] * temp;
    temp = temp * nums[i];
  }
  return res;
};
// @lc code=end
