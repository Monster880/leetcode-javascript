/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = Number.MIN_VALUE;
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count = dfs(grid, i, j);
        max = Math.max(max, count);
      }
    }
  }
  return max;
};

function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }
  grid[i][j] = 0;
  let count = 1;
  count += dfs(grid, i + 1, j);
  count += dfs(grid, i - 1, j);
  count += dfs(grid, i, j + 1);
  count += dfs(grid, i, j - 1);
  return count;
}
// @lc code=end
