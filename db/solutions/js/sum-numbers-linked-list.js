function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    const stack1 = [];
    const stack2 = [];
    const outStack = [];
    let carry = 0;

    const toStack = (s, l) => {
        do {
            s.push(l.val);
        } while (l = l.next);
    };

    toStack(stack1, l1);
    toStack(stack2, l2);

    while (stack1.length || stack2.length) {
        const sum = carry + (stack1.pop() || 0) + (stack2.pop() || 0);
        carry = Number(sum > 9);
        outStack.push(sum % 10);
    }

    if (carry) {
        outStack.push(carry);
    }

    const outHead = new ListNode();
    let tmpNode = outHead;

    while (outStack.length) {
        tmpNode.next = new ListNode(outStack.pop());
        tmpNode = tmpNode.next;
    }

    return outHead.next;
}