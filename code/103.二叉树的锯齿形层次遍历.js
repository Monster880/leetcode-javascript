/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
  var res = [];
  if (!root) return res;
  var zig = true;
  var queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    res.push([]);
    let len = queue.length;
    if (zig) {
      for (let i = 1; i <= len; i++) {
        let cur = queue.shift();
        res[res.length - 1].push(cur.val);
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
      }
    } else {
      for (let i = 1; i <= len; i++) {
        let cur = queue.pop();
        res[res.length - 1].push(cur.val);
        if (cur.right) queue.unshift(cur.right);
        if (cur.left) queue.unshift(cur.left);
      }
    }
    zig = !zig;
  }
  return res;
};
// @lc code=end
