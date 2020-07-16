/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let L1 = reverse(l1);
  let L2 = reverse(l2);
  let carry = 0;
  let sum = 0;
  let dummyHead = new ListNode();
  let cur = dummyHead;
  while (L1 || L2) {
    sum = (L1 ? L1.val : 0) + (L2 ? L2.val : 0) + carry;
    carry = sum >= 10 ? 1 : 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (L1) {
      L1 = L1.next;
    }
    if (L2) {
      L2 = L2.next;
    }
  }
  if (carry) {
    cur.next = new ListNode(carry);
    cur = cur.next;
  }
  return reverse(dummyHead.next);
};

function reverse(root) {
  let cur = root;
  let pre = null;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}
// @lc code=end
