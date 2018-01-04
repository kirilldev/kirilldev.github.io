/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let holeIndex = null;

    nums[nums.length - 1] = 1; // for cases if input is like [1, 0];

    for (let i=nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0 && holeIndex === null) {
            holeIndex = i;
        } else if (holeIndex !== null) {
            const requiredJump = holeIndex - i + 1;

            if (nums[i] >= requiredJump) {
                holeIndex = null;
            }
        }
    }

    return holeIndex === null;
}