/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let dp = []
  dp[0] = 0
  dp[1] = 0
  for(let i=2;i<nums.length+2;i++){
    dp[i] = Math.max((dp[i-2]+nums[i-2]),dp[i-1])
  }
  return dp[nums.length+1]
};
// @lc code=end

