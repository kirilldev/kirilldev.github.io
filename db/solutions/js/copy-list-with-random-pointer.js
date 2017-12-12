function RandomListNode(label) {
    this.label = label;
    this.next = null;
    this.random = null;
}

function copyRandomPointerList(head) {
    const map = new Map([[null, null]]);
    const newHead = {};

    let current = head;
    let newHeadCurrent = newHead;

    while (current) {
        newHeadCurrent.next = new RandomListNode(current.label);
        map.set(current, newHeadCurrent.next);

        newHeadCurrent = newHeadCurrent.next;
        current = current.next;
    }

    current = head;
    newHeadCurrent = newHead.next;

    while (current) {
        newHeadCurrent.random = map.get(current.random);
        newHeadCurrent = newHeadCurrent.next;
        current = current.next;
    }

    return newHead.next || head;
}