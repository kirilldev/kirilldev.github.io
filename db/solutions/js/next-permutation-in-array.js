/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    if (nums.length !== 1) {
        let i = nums.length - 2;

        while (nums[i] >= nums[i + 1] && i !== -1) {
            i--;
        }

        swap(nums, i, findNextLarger(nums, i));
        copyBackwards(nums, nums.slice(i + 1).sort((a, b) => a - b));
    }
}

function copyBackwards(a, b) {
    let j = a.length - 1;

    for (let i = b.length - 1; i >= 0; i--) {
        a[j--] = b[i];
    }
}

function findNextLarger(nums, j) {
    let nextLarger = Infinity;
    let foundIndex = -1;

    for (let i = j; i < nums.length; i++) {
        if (nums[j] < nums[i] && nums[i] < nextLarger) {
            nextLarger = nums[i];
            foundIndex = i;
        }
    }

    return foundIndex;
}

function swap(arr, i, j) {
    if (i !== -1 && j !== -1) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
