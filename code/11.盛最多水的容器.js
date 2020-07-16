/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 0) return 0;
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let currentArea =
      Math.abs(right - left) * Math.min(height[left], height[right]);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    if (currentArea > max) max = currentArea;
  }
  return max;
};
// @lc code=end
