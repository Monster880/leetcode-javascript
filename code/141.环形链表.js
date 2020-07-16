/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head == null||head.next == null){
    return false;
  }
  let oneStep = head
  let TwoStep = head.next
  while(oneStep != TwoStep){
    if(TwoStep == null || TwoStep.next == null) return false;
    oneStep = oneStep.next
    TwoStep = TwoStep.next.next
  }
  return true
};
// @lc code=end

