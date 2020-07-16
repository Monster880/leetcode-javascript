/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root, left, right) {
  if (root == null) {
    return true;
  } else if (root.val <= left || root.val >= right) return false;
  return (
    isValidBST(root.left, left, root.val) &&
    isValidBST(root.right, root.val, right)
  );
};
// @lc code=end
