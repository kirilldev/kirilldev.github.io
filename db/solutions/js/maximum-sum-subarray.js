/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const tmp = [];
    let prev = -Infinity;

    nums.forEach(num => {
        const best = Math.max(num, num + prev);
        tmp.push(best);
        prev = best;
    });

    return Math.max(...tmp);
};