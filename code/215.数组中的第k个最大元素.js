/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = [];
  let len = 0;
  while (len < k) {
    heap[len + 1] = nums[len++];
  }
  buildHeap(heap, len);
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      heap[1] = nums[i];
      AdjustDown(heap, len, 1);
    }
  }
  return heap[1];
};

function buildHeap(heap, len) {
  for (let i = Math.floor(len / 2); i >= 1; i--) {
    AdjustDown(heap, len, i);
  }
}

function AdjustDown(heap, len, k) {
  heap[0] = heap[k];
  for (let i = 2 * k; i <= len; i = i * 2) {
    if (i < len && heap[i] > heap[i + 1]) i++;
    if (heap[0] <= heap[i]) break;
    else {
      heap[k] = heap[i];
      k = i;
    }
  }
  heap[k] = heap[0];
}

function swap(heap, i, j) {
  let temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}
// @lc code=end
