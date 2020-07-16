/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

const { func } = require("prop-types");

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
var sumNumbers = function (root) {
  return RootToSum(root, 0);
};

function RootToSum(root, sum) {
  if (!root) return 0;
  let next = sum * 10 + root.val;
  if (root.left == null && root.right == null) {
    return next;
  }
  let l = RootToSum(root.left, next);
  let r = RootToSum(root.right, next);
  return l + r;
}

// @lc code=end
