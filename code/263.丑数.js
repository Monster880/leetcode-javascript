/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */


var isUgly = function(num) {
  if(num <= 0) return false
  if(num == 1) return true
  var list = [2,3,5]
  if(list.includes(num)) return true
  for(let i of list){
    if(num % i == 0) return isUgly(Math.floor(num/i))
  }
  return false
};
// @lc code=end