/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  var res = [];
  function dfs(root, sum, tempList) {
    if (!root) return;
    tempList.push(root.val);
    if (root.left == null && root.right == null && root.val === sum) {
      res.push([...tempList]);
    }
    dfs(root.left, sum - root.val, tempList);
    dfs(root.right, sum - root.val, tempList);
    tempList.pop();
  }
  dfs(root, sum, []);
  return res;
};
// @lc code=end
