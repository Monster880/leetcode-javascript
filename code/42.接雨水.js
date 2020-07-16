/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0;
    for (let j = i - 1; j >= 0; j--) {
      leftMax = height[j] >= leftMax ? height[j] : leftMax;
    }
    let rightMax = 0;
    for (let j = i + 1; j < height.length; j++) {
      rightMax = height[j] >= rightMax ? height[j] : rightMax;
    }
    let min = Math.min(leftMax, rightMax);
    if (min > height[i]) {
      sum = sum + min - height[i];
    }
  }
  return sum;
};
// @lc code=end
