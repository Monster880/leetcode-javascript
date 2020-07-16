/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let count = 1;
    if (!set.has(cur - 1)) {
      while (set.has(cur + 1)) {
        count++;
        cur = cur + 1;
      }
    }
    max = Math.max(count, max);
  }
  return max;
};
// @lc code=end
