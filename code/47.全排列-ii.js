/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const list = [];
  backtrack(
    list,
    [],
    nums.sort((a, b) => a - b),
    []
  );
  return list;
};

function backtrack(list, tempList, nums, visited) {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    if (visited[i - 1] && i > 0 && nums[i] === nums[i - 1]) continue;
    visited[i] = true;
    tempList.push(nums[i]);
    backtrack(list, tempList, nums, visited);
    visited[i] = false;
    tempList.pop();
  }
}

// @lc code=end
