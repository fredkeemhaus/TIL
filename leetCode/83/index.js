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
var deleteDuplicates = function (head) {
  if (!head) return null;
  let prev = head,
    next = head.next;

  while (next) {
    if (prev.val === next.val) {
      prev.next = next.next;
    } else {
      prev = prev.next;
    }
    next = next.next;
  }
  return head;
};
