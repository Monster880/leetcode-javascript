/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var slowP = 0
  for(let fastP =1;fastP<nums.length;fastP++){
    if(nums[fastP] != nums[slowP]){
      nums[++slowP] = nums[fastP]
    }
  }
  return slowP+1
};
// @lc code=end

