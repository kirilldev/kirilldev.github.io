/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(s, nums) {
    let [i, j] = [-1, -1];
    let segmentSum = 0;
    let length = Infinity;

    while (i < nums.length) {
        if (segmentSum < s) {
            i++;
            segmentSum = segmentSum + nums[i];
        } else {
            let newLen = i - j;
            
            if (newLen < length) {
                length = newLen;
            }
            
            j++;
            segmentSum = segmentSum - nums[j];
        }
    }

    return length === Infinity ? 0 : length;
};