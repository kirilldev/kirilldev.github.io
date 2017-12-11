/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function oddEvenList(head) {
    const tailStart = {};

    let isEven = true;
    let curr = head;

    let tailCurr = tailStart;
    let headCurr = {};

    while (curr) {
        if (isEven) {
            headCurr.next = curr;
            headCurr = headCurr.next;
        } else {
            tailCurr.next = curr;
            tailCurr = tailCurr.next;
        }

        curr = curr.next;
        isEven = !isEven;
    }

    tailCurr.next = null;
    headCurr.next = tailStart.next;

    return head;
}
