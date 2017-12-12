function findLengthOfLCIS(nums) {
    let max = 0;
    let len = 0;
    let prev = -Infinity;

    nums.forEach(num => {
        if (prev < num) {
            len++;
            max = Math.max(max, len);
        } else {
            len = 1;
        }

        prev = num;
    });

    return max;
}