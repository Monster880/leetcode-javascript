/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 2] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
// @lc code=end
