/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = nums[0]
  for(let i=1;i<nums.length;i++){
    nums[i] = Math.max(nums[i-1],0)+nums[i]
    if(nums[i]>max){
      max = nums[i]
    }
  }
  return max
};
// @lc code=end

