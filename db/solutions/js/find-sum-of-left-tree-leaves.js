/*
function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.isLeaf = function () {
    return !this.left && !this.right
};
 */

/**
 * @param head {Node}
 * @returns {Number}
 */
function sumLeftLeaves (head) {
    let sum = 0;

    if (!head) {
        return sum;
    } else if (head.left && head.left.isLeaf()) {
        sum += head.left.data;
    } else {
        sum += sumLeftLeaves(head.left);
    }

    return sum + sumLeftLeaves(head.right);
}