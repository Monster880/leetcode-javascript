/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var majority
  var count = 0
  for(let i=0;i<nums.length;i++){
    if(count == 0){
      majority = nums[i]
      count += 1
    }else if(majority == nums[i]){
      count += 1
    }else {
      count -= 1
    }
  }
  return majority
};
// @lc code=end

