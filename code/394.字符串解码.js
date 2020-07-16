/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let str = "";
  let k = "";
  let stack = [];
  for (let ch of s) {
    if (ch >= 0) {
      k += ch;
    } else if (ch === "[") {
      stack.push({ str: str, k: k });
      str = "";
      k = "";
    } else if (ch === "]") {
      let data = stack.pop();
      str = data.str + str.repeat(data.k);
    } else {
      str += ch;
    }
  }
  return str;
};
// @lc code=end
