/**
 * @param {number[]} nums
 */
function NumArray(nums) {
    this.nums = nums;
    this.range = [];
    let prev = 0;

    nums.forEach(num => {
        prev = prev + num;
        this.range.push(prev);
    });
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.range[j] - this.range[i] + this.nums[i];

};
