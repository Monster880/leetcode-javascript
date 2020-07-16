/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dummyHead = {
    next: head,
  };
  let cur = dummyHead.next;
  let pre = dummyHead;
  let index = 0;
  let p1 = (p2 = p3 = p4 = null);
  while (cur) {
    const next = cur.next;
    index++;
    if (index > m && index <= n) {
      cur.next = pre;
    }
    if (index == m - 1) {
      p1 = cur;
    }
    if (index == m) {
      p2 = cur;
    }
    if (index == n) {
      p3 = cur;
    }
    if (index == n + 1) {
      p4 = cur;
    }
    pre = cur;
    cur = next;
  }
  (p1 || dummyHead).next = p3;
  p2.next = p4;
  return dummyHead.next;
};
// @lc code=end
