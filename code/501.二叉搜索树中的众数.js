/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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

var findMode = function (root) {
  let res = [];
  let count = 0;
  let preNode = null;
  let max = 0;
  function helper(root) {
    if (root == null) return;
    helper(root.left);
    if (preNode != null && preNode.val == root.val) {
      count++;
    } else {
      count = 1;
    }
    if (count > max) {
      max = count;
      res = [];
      res.push(root.val);
    } else if (count == max) {
      res.push(root.val);
    }
    preNode = root;
    helper(root.right);
  }
  helper(root);
  return res;
};
// @lc code=end
