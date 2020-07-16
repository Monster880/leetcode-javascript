/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  var list = [];
  function inOrder(root) {
    if (root == null) return;
    inOrder(root.left);
    list.push(root.val);
    inOrder(root.right);
  }
  inOrder(root);
  return list;
};

// @lc code=end
