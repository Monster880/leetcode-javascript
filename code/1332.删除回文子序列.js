/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  function isPalindrome(s){
    let i=0,j=s.length-1
    while(i<j){
      if(!(s[i]===s[j])){
        return false
      }
      i++
      j--
    }
    return i>=j
  }
  if(s.length ==0){
    return 0
  }else if(isPalindrome(s)){
    return 1
  }else{
    return 2
  }
};
// @lc code=end

