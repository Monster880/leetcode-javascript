/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var map = {}
  for(let i=0;i<nums.length;i++){
    if(map[nums[i]]!=undefined && (i-map[nums[i]])<=k){
      return true
    }
    map[nums[i]] = i
  }
  return false
};
// @lc code=end

