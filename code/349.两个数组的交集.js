/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var num = []
  var map = {}
  for(let i =0;i<nums1.length;i++){
    if(map[nums1[i]] === undefined){
      map[nums1[i]] = nums1[i]
    }
  }
  for(let j=0;j<nums2.length;j++){
    if(map[nums2[j]] !== undefined){
      num.push(nums2[j])
      map[nums2[j]] = undefined
    }
  }
  return num
};
// @lc code=end

