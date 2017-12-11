/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
    if (!node || !node.next) {
        throw new Error('Constraint Violation!');
    }

    const nextNext = node.next.next;

    node.val = node.next.val;
    node.next = nextNext;
};
