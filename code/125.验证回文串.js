/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  let c = s.charCodeAt(0);
  const isDigit = c >= "0".charCodeAt(0) && c <= "9".charCodeAt(0);
  const isChar = c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0);
  return isChar || isDigit;
}

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isValid(s[left])) {
      left++;
      continue;
    }
    if (!isValid(s[right])) {
      right--;
      continue;
    }
    if (s[left] == s[right]) {
      left++;
      right--;
      continue;
    } else {
      break;
    }
  }
  return left >= right;
};
// @lc code=end
