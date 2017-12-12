/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//iterative
function deleteDuplicates(head) {
    let currentNode = head || {};

    while (currentNode.next) {
        if (currentNode.val === currentNode.next.val) {
            currentNode.val = currentNode.next.val;
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    return head;
}