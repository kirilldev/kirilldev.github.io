function subarraySum(nums = [], k) {
    const map = new Map([[0, 1]]);
    let currentSum = 0;
    let res = 0;

    nums.forEach(num => {
        currentSum = currentSum + num;

        if (map.has(currentSum - k)) {
            res = res + map.get(currentSum - k);
        }

        const count = (map.get(currentSum) || 0) + 1;

        map.set(currentSum, count);
    });

    return res;
}
