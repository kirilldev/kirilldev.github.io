/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function partitionList(head, x) {
    const newHead = {};
    const tailStart = {};

    let newHeadCurrent = newHead;
    let newTailCurrent = tailStart;
    let current = head;

    while (current) {
        if (current.val < x) {
            newHeadCurrent.next = current;
            newHeadCurrent = newHeadCurrent.next;
        } else {
            newTailCurrent.next = current;
            newTailCurrent = newTailCurrent.next;
        }

        current = current.next;
    }

    newTailCurrent.next = null;
    newHeadCurrent.next = tailStart.next;

    return newHead.next || head;
}