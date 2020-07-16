/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxSum = root.val;
  function dfs(root) {
    if (root == null) return 0;
    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));
    maxSum = Math.max(maxSum, left + root.val + right);
    return root.val + Math.max(left, right);
  }
  dfs(root);
  return maxSum;
};
// @lc code=end
