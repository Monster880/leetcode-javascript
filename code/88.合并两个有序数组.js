/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var len = m + n - 1;
  while (len >= 0) {
    if (n < 1) {
      return nums1;
    }
    if (m < 1) {
      nums1[len--] = nums2[--n];
      continue;
    }
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[len--] = nums2[--n];
    } else {
      nums1[len--] = nums1[--m];
    }
  }
  return nums1;
};
// @lc code=end
