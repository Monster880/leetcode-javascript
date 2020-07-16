/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  let needs = {};
  let windows = {};
  let match = 0;
  let res = [];
  for (let i = 0; i < p.length; i++) {
    needs[p[i]] ? needs[p[i]]++ : (needs[p[i]] = 1);
  }
  let needsLen = Object.keys(needs).length;
  while (right < s.length) {
    let c1 = s[right];
    right++;
    if (needs[c1]) {
      windows[c1] ? windows[c1]++ : (windows[c1] = 1);
      if (windows[c1] === needs[c1]) {
        match++;
      }
    }
    while (match === needsLen) {
      let c2 = s[left];
      if (right - left === p.length) {
        res.push(left);
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
  return res;
};
// @lc code=end
