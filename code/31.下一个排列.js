/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

const { reverse } = require("dns");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let i = nums.length - 2;
  while (i > -1 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i > -1) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  Reverse(nums, i + 1, nums.length - 1);
  return nums;
};

function Reverse(nums, i, j) {
  let left = i,
    right = j;
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}

// @lc code=end
