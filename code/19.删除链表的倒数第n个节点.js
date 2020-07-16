/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummyHead = {
    next: head,
  };
  let noop = {
    next: null,
  };
  let cur1 = dummyHead;
  let cur2 = dummyHead;
  let i = -1;
  while (i !== n) {
    cur1 = cur1.next;
    i++;
  }
  while (cur1) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  cur2.next = ((cur2 || noop).next || noop).next;
  return dummyHead.next;
};
// @lc code=end
