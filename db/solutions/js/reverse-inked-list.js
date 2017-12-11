function ListNode(val) {
    this.val = val;
    this.next = null;
}

//recursive
function reverseList(head) {
    if ((head === null) || (head.next === null)) {
        return head;
    }

    const reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedHead;
}