/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

const { count } = require("console");

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashTable = {};
  let count = [];
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    count = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      count[str[j].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join("");
    if (hashTable[key]) {
      hashTable[key].push(str);
    } else {
      hashTable[key] = [str];
    }
  }
  return Object.values(hashTable);
};
// @lc code=end
