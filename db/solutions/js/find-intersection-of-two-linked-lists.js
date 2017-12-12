/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// O(n) memory solution
function getIntersectionNode(headA, headB, set = new Set()) {
    if (!headA && !headB) {
        return null;
    }

    if (set.has(headA)) {
        return headA;
    } else if (headA) {
        set.add(headA);
    }

    if (set.has(headB)) {
        return headB;
    } else if (headB) {
        set.add(headB);
    }

    const nextA = headA ? headA.next : null;
    const nextB = headB ? headB.next : null;

    return getIntersectionNode(nextA, nextB, set);
}

// TODO: O(1) memory solution