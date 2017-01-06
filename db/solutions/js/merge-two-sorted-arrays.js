/*
Merge an array of size n into another array of size m+n September 5, 2009
Asked by Binod Question: There are two sorted arrays. 
First one is of size m+n containing only m elements. 
Another one is of size n and contains n elements.
 Merge these two arrays into the first array of size m+n such that the output is sorted.
*/

function mergeIntoArray(mn, n) {
	let i = n.length - 1;
	let j = mn.length - n.length - 1;
	let k = mn.length - 1;

	while (i >= 0) {
		if (j === -1 || n[i] > mn[j]) {
			mn[k] = n[i];
			i--;
		} else {
			mn[k] = mn[j];
			j--;
		}
		
		k--;
	}
	
	return mn;
}


console.log(mergeIntoArray([1, 3, 9, null, null], [2, 8]));
console.log(mergeIntoArray([1, 2], []));
console.log(mergeIntoArray([null, null], [2, 8]));
