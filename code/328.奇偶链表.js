/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let dummyHead1 = {
    next: head,
  };
  let dummyHead2 = {
    next: head.next,
  };
  let odd = dummyHead1.next;
  let even = dummyHead2.next;
  while (odd && odd.next && even && even.next) {
    let oddNext = odd.next.next;
    let evenNext = even.next.next;

    odd.next = oddNext;
    even.next = evenNext;

    odd = oddNext;
    even = evenNext;
  }
  odd.next = dummyHead2.next;
  return dummyHead1.next;
};
// @lc code=end
