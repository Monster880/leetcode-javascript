/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var res = [];
  if (!root) {
    return res;
  }
  var queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let len = queue.length;
    res.push([]);
    for (let i = 1; i <= len; i++) {
      let cur = queue.shift();
      res[res.length - 1].push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  return res;
};
// @lc code=end
