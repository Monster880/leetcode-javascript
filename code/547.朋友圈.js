/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  const visited = Array.from({ length: M.length }).fill(0);
  let res = 0;
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      res++;
      dfs(i);
    }
  }
  function dfs(i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] && !visited[j]) {
        visited[j] = 1;
        dfs(j);
      }
    }
  }
  return res;
};

// @lc code=end
