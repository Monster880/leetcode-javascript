/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var map = {}
  for(let i=0;i<numbers.length;i++){
    const diff = target - numbers[i]
    if(map[diff] !== undefined){
      return[map[diff],i+1]
    }
    map[numbers[i]] = i+1
  }
  return []
};
// @lc code=end

