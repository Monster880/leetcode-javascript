/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  let res = null;
  function inOrder(root) {
    if (root == null) return;
    inOrder(root.left);
    count++;
    if (count === k) {
      res = root.val;
    }
    inOrder(root.right);
  }
  inOrder(root);
  return res;
};

// @lc code=end
