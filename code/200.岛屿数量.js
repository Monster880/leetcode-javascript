/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        res++;
        helper(grid, rows, cols, i, j);
      }
    }
  }
  return res;
};

function helper(grid, rows, cols, row, col) {
  if (
    row < 0 ||
    row > rows - 1 ||
    col < 0 ||
    col > cols - 1 ||
    grid[row][col] === "0"
  ) {
    return;
  }
  grid[row][col] = "0";
  helper(grid, rows, cols, row - 1, col);
  helper(grid, rows, cols, row + 1, col);
  helper(grid, rows, cols, row, col - 1);
  helper(grid, rows, cols, row, col + 1);
}
// @lc code=end
