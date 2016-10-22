/*
 function Node (data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
 }
 */

//     10              10
//     / \            /  \
//    12  4    =>    4    12
//   /    /           \     \
//  5    1              1    5

function isMirrorTrees(head1, head2) {
  if (!head1 || !head2) {
    return !head1 && !head2;
  }

  if (head1.data !== head2.data) {
    return false;
  }

  return isMirrorTrees(head1.left, head2.right)
    && isMirrorTrees(head1.right, head2.left);
}