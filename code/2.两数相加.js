/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

const { List } = require("immutable");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  let cur1 = l1;
  let cur2 = l2;
  let carry = 0;
  while (cur1 !== null || cur2 !== null) {
    let val1 = cur1 !== null ? cur1.val : 0;
    let val2 = cur2 !== null ? cur2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;
    let node = new ListNode(sum % 10);
    cur.next = node;
    cur = cur.next;
    if (cur1 !== null) {
      cur1 = cur1.next;
    }
    if (cur2 !== null) {
      cur2 = cur2.next;
    }
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummyHead.next;
};
// @lc code=end
