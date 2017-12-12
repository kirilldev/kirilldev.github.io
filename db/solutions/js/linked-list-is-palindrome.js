function ListNode(val, next=null) {
  this.val = val;
  this.next = next;
}

function isPalindrome (head) {
    function recurse (tail) {
        if (tail === null) {
            return true;
        }

        if (recurse(tail.next) && tail.val === head.val) {
            head = head.next;

            return true;
        }

        return false
    }

    return recurse(head);
}