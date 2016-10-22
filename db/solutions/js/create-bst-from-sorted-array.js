/*
 * function Node(val) {
 *   this.val = val;
 *   this.left =  null;
 *   this.right = null'
 * }
 */

/**
 * @param {number[]} nums
 * @return {Node}
 */
var sortedArrayToBST = function(nums, start=0, end=nums.length-1) {
  if (start > end) {
    return null
  }

  let mid = (end + start) / 2;
  let root = new Node(nums[mid]);
  root.left = sortedArrayToBST(nums, start, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, end);

  return root;
};