/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let slow = head;
  let fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const left = slow.next;
  slow.next = null;
  const right = head;
  return helper(sortList(left), sortList(right));
};
function helper(a, b) {
  const header = new ListNode(-1);
  let root = header;
  while (a && b) {
    if (a.val < b.val) {
      root.next = a;
      a = a.next;
    } else {
      root.next = b;
      b = b.next;
    }
    root = root.next;
  }
  root.next = a == null ? b : a;
  return header.next;
}
// @lc code=end
