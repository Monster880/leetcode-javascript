/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = -1;
  let right = nums.length;
  let cur = 0;
  while (cur < right) {
    if (nums[cur] < 1) {
      swap(nums, ++left, cur++);
    } else if (nums[cur] > 1) {
      swap(nums, --right, cur);
    } else if (nums[cur] == 1) {
      cur++;
    }
  }
};
function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// @lc code=end
