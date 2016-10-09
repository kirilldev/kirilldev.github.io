/*
function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
*/

/**
 * @param head {Node}
 * @param level {Number}
 * @returns {Number}
 */
function sumNodesOnDepth (head, level) {
    if (!head) {
        return 0;
    }

    if (level === 1)  {
        return head.data;
    }

    return sumNodesOnDepth(head.left, level - 1)
        + sumNodesOnDepth(head.right, level - 1);
}