/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  if (matrix.length === 0) return res;
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right]);
    }
    for (let i = right; i > left; i--) {
      res.push(matrix[bottom][i]);
    }
    for (let i = bottom; i > top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  if (bottom === top) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[bottom][i]);
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  }
  return res;
};
// @lc code=end
