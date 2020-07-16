/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0,
    end = 0,
    length = 0,
    res = 0;
  while (end < s.length) {
    for (let i = start; i < end; i++) {
      if (s[i] === s[end]) {
        start = i + 1;
        length = end - start;
        break;
      }
    }
    length++;
    end++;
    res = Math.max(res, length);
  }
  return res;
};
// @lc code=end
