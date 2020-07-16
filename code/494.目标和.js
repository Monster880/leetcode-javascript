/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum < S) return 0;
  if ((sum + S) % 2 === 1) return 0;
  return sumCount(nums, (sum + S) >> 1);
};

function sumCount(nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
}
// @lc code=end
