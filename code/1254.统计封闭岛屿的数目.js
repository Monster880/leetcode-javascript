/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let m = grid.length - 1;
  let n = grid[0].length - 1;

  function dfs(i, j) {
    if (grid[i][j] == 0) {
      grid[i][j] = 1;
      if (i > 0) dfs(i - 1, j);
      if (i < m) dfs(i + 1, j);
      if (j > 0) dfs(i, j - 1);
      if (j < n) dfs(i, j + 1);
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0);
    dfs(i, n);
  }

  for (let i = 0; i < n; i++) {
    dfs(0, i);
    dfs(m, i);
  }

  let res = 0;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] == 0) {
        res += 1;
        dfs(i, j);
      }
    }
  }
  return res;
};
// @lc code=end
