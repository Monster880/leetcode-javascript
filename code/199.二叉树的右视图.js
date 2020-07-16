/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let list = [];
  dfs(list, root, 0);
  return list;
};

function dfs(list, root, level) {
  if (!root) return;
  if (level === list.length) {
    list.push(root.val);
  }
  dfs(list, root.right, level + 1);
  dfs(list, root.left, level + 1);
}
// @lc code=end
