/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function rotateRight(head, k) {
    if (!head || !head.next || !k) {
        return head;
    }

    const cutData = cutNeededPart(head, 1, k);

    if (cutData.cutDepth) {
        cutData.cutEnd.next = head;

        return cutData.cutStart;
    }

    return head;
}

function cutNeededPart(node, depth, k) {
    if (node.next === null) {
        let normalizedK = k % depth;

        if (normalizedK) {
            return {
                cutDepth: depth - normalizedK,
                cutEnd: node,
                cutStart: null
            };
        }

        return {
            cutDepth: 0
        };
    }

    const cutData = cutNeededPart(node.next, depth + 1, k);

    if (cutData.cutDepth === depth) {
        cutData.cutStart = node.next;
        node.next = null;
    }

    return cutData;
}