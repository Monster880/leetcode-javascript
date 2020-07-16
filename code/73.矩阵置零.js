/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (matrix.length == 0) return matrix;
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRow = false;
  let firstCol = false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const item = matrix[i][j];
      if (item == 0) {
        if (i == 0) {
          firstRow = true;
        }
        if (j == 0) {
          firstCol = true;
        }
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstRow) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};
// @lc code=end
