/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let currentMax = 0;
    
    while (i < j) {
        const a = height[i];
        const b = height[j];
        const area = Math.min(a, b) * (j - i);
        currentMax = Math.max(currentMax, area);
        
        if (a < b) {
            i++;
        } else {
            j--;
        }
    }
    
    return currentMax;
};
