/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function swapPairs(head) {
    if (!head) {
        return head;
    }

    const newHead = {};
    const dummy = {next: null};
    let newHeadCurrent = newHead;
    let odd = head || dummy;
    let even = head.next;

    while (odd && even) {
        const newOdd = even.next;
        const newEven = (newOdd || dummy).next;

        newHeadCurrent.next = even;
        newHeadCurrent.next.next = odd;
        newHeadCurrent = newHeadCurrent.next.next;

        even = newEven;
        odd = newOdd;
    }

    if (odd) {
        odd.next = null;
        newHeadCurrent.next = odd;
    } else {
        newHeadCurrent.next = null;
    }

    return newHead.next;
}