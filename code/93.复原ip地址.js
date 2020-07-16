/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) return [];
  let res = [];
  function dfs(tempList, str) {
    if (tempList.length === 4 && tempList.join("") === s) {
      res.push(tempList.join("."));
    } else {
      let len = Math.min(3, str.length);
      for (let i = 0; i < len; i++) {
        let temp = str.substr(0, i + 1);
        if (temp.length > 1 && temp[0] === "0") return;
        if (temp < 256) {
          dfs(tempList.concat([temp]), str.substr(i + 1));
        }
      }
    }
  }
  dfs([], s);
  return res;
};
// @lc code=end
