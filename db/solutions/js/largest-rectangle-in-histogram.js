/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
    const last = arr => arr[arr.length - 1];
    const stack = [];
    let maxArea = 0;

    heights.push(0); //ensure that last element is smallest one

    for (let i = 0; i <= heights.length; i++) {
        while (stack.length && heights[last(stack)] > heights[i]) {
            const j = stack.pop();
            const len = stack.length ? i - 1 - last(stack) : i;
            maxArea = Math.max(maxArea, len * heights[j]);
        }

        stack.push(i);
    }

    return maxArea;
}
