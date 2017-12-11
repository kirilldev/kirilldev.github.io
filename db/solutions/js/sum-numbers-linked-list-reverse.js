function ListNode(val) {
     this.val = val;
     this.next = null;
}

var addTwoNumbers = function(l1=null, l2=null) {
    const outHead = new ListNode();
    let currentOut = outHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        currentOut.next = new ListNode(carry);
        currentOut = currentOut.next;

        if (l1 !== null) {
            currentOut.val += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            currentOut.val += l2.val;
            l2 = l2.next;
        }

        carry = Number(currentOut.val > 9)
        currentOut.val = currentOut.val % 10;
    }

    if (carry) {
        currentOut.next = new ListNode(carry);
    }
    
    return outHead.next;
};