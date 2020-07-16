/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let hashMap = {};
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
    if (acc === k) {
      count++;
    }
    if (hashMap[acc - k] != null) {
      count += hashMap[acc - k];
    }
    if (hashMap[acc] == null) {
      hashMap[acc] = 1;
    } else {
      hashMap[acc] += 1;
    }
  }
  return count;
};
// @lc code=end
