/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  function generateTree(start, end) {
    if (start > end) {
      return [null];
    }
    let res = [];
    for (let i = start; i <= end; i++) {
      let leftNodes = generateTree(start, i - 1);
      let rightNodes = generateTree(i + 1, end);
      for (let leftNode of leftNodes) {
        for (let rightNode of rightNodes) {
          let cur = new TreeNode(i);
          cur.left = leftNode;
          cur.right = rightNode;
          res.push(cur);
        }
      }
    }
    return res;
  }
  return generateTree(1, n);
};
// @lc code=end
