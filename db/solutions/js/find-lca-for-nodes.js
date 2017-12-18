/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function lowestCommonAncestor(root, p, q) {
    function findPath (tree, node, path=[]) {
        if (!tree) {
            return null;
        }

        path.push(tree);

        if (tree === node) {
            return path.slice();
        }

        let res = findPath(tree.left, node, path)
            || findPath(tree.right, node, path);

        path.pop();

        return res;

    }

    const pathP = findPath(root, p);
    const pathQ = findPath(root, q);

    for (let i=0; i < pathP.length; i++) {
        if (pathP[i] !== pathQ[i]) {
            return pathP[i - 1];
        }
    }

    return pathP[pathP.length - 1];
}