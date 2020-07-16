/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (nums.length === 0) return 0;
  let min = null;
  let sum = 0;
  let sliderWindow = [];
  for (let i = 0; i < nums.length; i++) {
    sliderWindow.push(nums[i]);
    sum = sliderWindow.reduce((a, b) => a + b, 0);
    while (sum >= s) {
      if (min == null || sliderWindow.length < min) {
        min = sliderWindow.length;
      }
      sum = sum - sliderWindow.shift();
    }
  }
  return min || 0;
};
// @lc code=end
