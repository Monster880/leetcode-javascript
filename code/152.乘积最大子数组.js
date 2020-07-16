/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = min;
    min = Math.min(nums[i], Math.min(nums[i] * min, nums[i] * max));
    max = Math.max(nums[i], Math.max(nums[i] * max, nums[i] * temp));
    res = Math.max(res, max);
  }
  return res;
};
// @lc code=end
