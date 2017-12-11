function ListNode(val) {
    this.val = val;
    this.next = null;
}

function mergeTwoLists(l1, l2) {
    const out = new ListNode();
    let tmp = out;

    while (l1 || l2) {
        if ((!l1 && l2) || (l2 && (l1.val > l2.val))) {
            tmp.next = l2;
            l2 = l2.next;
        } else {
            tmp.next = l1;
            l1 = l1.next;
        }

        tmp = tmp.next;
    }

    return out.next;
}