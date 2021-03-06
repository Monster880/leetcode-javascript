/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  let row = matrix.length - 1;
  let col = 0;
  while (row > 0 && target < matrix[row][col]) {
    row--;
  }
  while (col < matrix[0].length) {
    if (matrix[row][col] === target) return true;
    else if (target > matrix[row][col]) {
      col++;
    } else if (row > 0) {
      row--;
    } else {
      return false;
    }
  }
  return false;
};
// @lc code=end
