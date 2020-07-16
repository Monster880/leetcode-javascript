/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummyHead = {
    next: head,
  };
  let current = dummyHead;
  while (current.next !== null && current.next.next !== null) {
    let first = current.next;
    let second = current.next.next;
    first.next = second.next;
    second.next = first;
    current.next = second;

    current = first;
  }
  return dummyHead.next;
};
// @lc code=end
