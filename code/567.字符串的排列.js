/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0;
  let right = 0;
  let needs = {};
  let windows = {};
  let match = 0;
  for (let i = 0; i < s1.length; i++) {
    needs[s1[i]] ? needs[s1[i]]++ : (needs[s1[i]] = 1);
  }
  let needsLen = Object.keys(needs).length;
  while (right < s2.length) {
    let c1 = s2[right];
    right++;
    if (needs[c1]) {
      windows[c1] ? windows[c1]++ : (windows[c1] = 1);
      if (windows[c1] === needs[c1]) {
        match++;
      }
    }
    while (match === needsLen) {
      let c2 = s2[left];
      if (s1.length === right - left) {
        return true;
      }
      if (needs[c2]) {
        windows[c2]--;
        if (windows[c2] < needs[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return false;
};
// @lc code=end
