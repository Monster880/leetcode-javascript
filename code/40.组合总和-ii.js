/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let list = [];
  backtrack(
    list,
    [],
    candidates.sort((a, b) => a - b),
    target,
    0
  );
  return list;
};

function backtrack(list, tempList, nums, remain, start) {
  if (remain === 0) return list.push([...tempList]);
  if (remain < 0) return;
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i - 1] === nums[i]) continue;
    tempList.push(nums[i]);
    backtrack(list, tempList, nums, remain - nums[i], i + 1);
    tempList.pop();
  }
}

// @lc code=end
