/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  var list = [];
  backtrack(
    list,
    [],
    nums.sort((a, b) => a - b),
    0
  );
  return list;
};
function backtrack(list, tempList, nums, start) {
  list.push([...tempList]);
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    tempList.push(nums[i]);
    backtrack(list, tempList, nums, i + 1);
    tempList.pop();
  }
}
// @lc code=end
