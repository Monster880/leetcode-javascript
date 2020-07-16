/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = [];
  let visited = {};
  function backtrack(str) {
    if (str.length === n) {
      res.push(str);
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        str += i;
        backtrack(str);
        str = str.substr(0, str.length - 1);
        visited[i] = false;
      }
    }
  }
  backtrack("");
  return res[k - 1];
};
// @lc code=end
