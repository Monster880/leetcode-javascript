/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode();
  dummy.next = head;
  var current = dummy;
  while (head) {
    let tail = current;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return dummy.next;
      }
    }
    const next = tail.next;
    [head, tail] = Reverse(head, tail);
    current.next = head;
    tail.next = next;
    current = tail;
    head = next;
  }
  return dummy.next;
};

function Reverse(head, tail) {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
    const next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  return [tail, head];
}
// @lc code=end
