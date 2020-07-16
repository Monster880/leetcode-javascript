/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */

var pathSum = function (root, sum) {
  if (root == null) return 0;
  const l = pathSum(root.left, sum);
  const r = pathSum(root.right, sum);
  const m = helper(root, sum);
  return l + r + m;
};

function helper(root, sum) {
  if (root == null) return 0;
  const l = helper(root.left, sum - root.val);
  const r = helper(root.right, sum - root.val);
  return (sum == root.val ? 1 : 0) + l + r;
}
// @lc code=end
