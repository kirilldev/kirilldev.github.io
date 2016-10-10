//O(n^2) solution
function findLongestSubSequence(arr) {
	let auxilary = new Array(arr.length).fill(1);
	let j = 1;
	
	while (j < auxilary.length) {
		let i = 0;
  
		while (i < j) {
			if ((arr[i] < arr[j]) && (auxilary[i] + 1 > auxilary[j])) {
				auxilary[j] = auxilary[i] + 1;
			}
      
			i++;
		}
    
		j++;
	}
	
	return Math.max.apply(null, auxilary);
}