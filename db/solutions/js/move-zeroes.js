/**
 * @param nums {Number[]}
 * @return {void}
 */
function moveZeroes(nums) {
  let j = 0;
  let i = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      if (j !== i) {
        nums[i] = nums[j];
        nums[j] = 0;
      }

      i++;
    }

    j++;
  }
}