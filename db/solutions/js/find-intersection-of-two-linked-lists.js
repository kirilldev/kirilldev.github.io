/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// O(1) memory solution
function getIntersectionNodeO1(headA, headB) {
    const length = (n, l=0) => n ? length(n.next, l + 1) : l;
    let aLen = length(headA);
    let bLen = length(headB);

    while (headA !== headB) {
        if (aLen >= bLen) {
            headA = headA.next;
            aLen--;
        }

        if ((aLen + 1) <= bLen) {
            headB = headB.next;
            bLen--;
        }
    }

    return headA;
}

// O(n) memory solution
function getIntersectionNodeOn(headA, headB, set = new Set()) {
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

    return getIntersectionNodeOn(nextA, nextB, set);
}
