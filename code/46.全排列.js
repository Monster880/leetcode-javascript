/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let visited = Array(nums.length).fill(false);
  function backtrack(tempList) {
    if (tempList.length === nums.length) {
      res.push([...tempList]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        tempList.push(nums[i]);
        backtrack(tempList);
        visited[i] = false;
        tempList.pop();
      }
    }
  }
  backtrack([]);
  return res;
};
// @lc code=end
