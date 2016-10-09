/*
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}
*/

//recursive
function isTreesIdenticalRecursive (head1, head2) {
	if (!head1 || !head2) {
		return !head1 && !head2;
	}
  
	if (head1.data !== head2.data) {
		return false;
	}
 
	return isTreesIdentical(head1.left, head2.left) 
  			&& isTreesIdentical(head1.right, head2.right);
}

//iterative
function isTreesIdenticalIterative (head1, head2) {
  let queue = [[head1, head2]];
  
  while (queue.length) {
	  let [n1, n2] = queue.shift();
	  
	  if (!n1 || !n2) {
	 	 return !n1 && !n2;
	  }
  
	  if (n1.data !== n2.data) {
		  return false;
	  }
	  
	  queue.push([n1.left, n2.left]); 
  	  queue.push([n1.right, n2.right]);
  }
  
  return true;
}