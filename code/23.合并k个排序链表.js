/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  switch (lists.length) {
    case 0:
      return null;
    case 1:
      return lists[0];
    case 2:
      return helper(lists[0], lists[1]);
    default:
      let mid = lists.length >> 1;
      return helper(
        mergeKLists(lists.slice(0, mid)),
        mergeKLists(lists.slice(mid, lists.length))
      );
  }
};

function helper(a, b) {
  let head = new ListNode();
  let cur = head;
  while (a && b) {
    if (a.val < b.val) {
      cur.next = a;
      a = a.next;
    } else {
      cur.next = b;
      b = b.next;
    }
    cur = cur.next;
  }
  cur.next = a == null ? b : a;
  return head.next;
}
// @lc code=end
