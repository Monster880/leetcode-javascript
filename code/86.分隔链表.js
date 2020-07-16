/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummyHead1 = {
    next: null,
  };
  const dummyHead2 = {
    next: null,
  };
  let current = {
    next: head,
  };
  let currentL1 = dummyHead1;
  let currentL2 = dummyHead2;
  while (current.next) {
    current = current.next;
    if (current.val < x) {
      currentL1.next = current;
      currentL1 = current;
    } else {
      currentL2.next = current;
      currentL2 = current;
    }
  }
  currentL2.next = null;
  currentL1.next = dummyHead2.next;
  return dummyHead1.next;
};
// @lc code=end
