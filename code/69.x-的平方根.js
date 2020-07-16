/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x==0){
    return 1
  }
  if(x<4){
    return 1
  }
  var left = 1
  var right = x/2 +1
  while(left < right){
    let mid = (left + right +1) >> 1
    let sub = mid * mid
    if(sub > x){
      right = mid -1
    }else {
      left = mid
    }
  }
  return left
};
// @lc code=end

