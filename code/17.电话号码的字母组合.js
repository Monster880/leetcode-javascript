/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

const { func } = require("prop-types");

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [];
  if (digits.length === 0) return res;
  let map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  function generate(index, str) {
    if (index === digits.length) {
      res.push(str);
      return;
    }
    let temp = map.get(digits[index]);
    for (let i = 0; i < temp.length; i++) {
      generate(index + 1, str + temp[i]);
    }
  }
  generate(0, "");
  return res;
};
// @lc code=end
