/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let tmp = (new Array((matrix[0] || []).length)).fill(0);
    let max = 0;

    matrix.forEach(row => {
        tmp = tmp.map((el, i) => (row[i] === '0') ? 0 : el + 1);
        max = Math.max(largestRectangleArea(tmp), max) ;
    });

    return max;
};

var largestRectangleArea = function(height) {
    const last = arr => arr[arr.length - 1];
    const stack = [];
    let maxArea = 0;
    height.push(0);

    for(let i = 0; i <= height.length; i++){
        while (stack.length && height[last(stack)] > height[i]) {
            const j = stack.pop();
            const len = stack.length ? i - 1 - last(stack) : i;
            maxArea = Math.max(maxArea, len*height[j]);
        }

        stack.push(i);
    }

    height.pop();

    return maxArea;
};