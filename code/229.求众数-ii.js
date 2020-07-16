/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const res = [];
  let n1 = null;
  let n2 = null;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (n1 === nums[i]) {
      count1++;
    } else if (n2 === nums[i]) {
      count2++;
    } else if (count1 === 0) {
      n1 = nums[i];
      count1++;
    } else if (count2 === 0) {
      n2 = nums[i];
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (n1 === nums[i]) {
      count1++;
    } else if (n2 === nums[i]) {
      count2++;
    }
  }
  if (count1 > (nums.length / 3) >>> 0) {
    res.push(n1);
  }
  if (count2 > (nums.length / 3) >>> 0) {
    res.push(n2);
  }
  return res;
};
// @lc code=end
