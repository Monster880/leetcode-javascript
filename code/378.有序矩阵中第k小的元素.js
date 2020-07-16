/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let heap = [];
  let len = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      heap[len++] = matrix[i][j];
    }
  }
  buildHeap(heap, k);
  for (let i = k + 1; i < len; i++) {
    if (heap[1] > heap[i]) {
      swap(heap, 1, i);
      AdjustDown(heap, k, 1);
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
    if (i < len && heap[i] < heap[i + 1]) i++;
    if (heap[0] >= heap[i]) break;
    else {
      swap(heap, i, k);
      k = i;
    }
  }
}

function swap(heap, i, j) {
  let temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}

// @lc code=end
