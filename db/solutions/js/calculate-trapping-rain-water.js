Array.prototype.last = function () {
    return this[this.length - 1];
}

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height=[]) {
    const peaks = findAllPeacks(height);
    const foldedPeacks = foldPeaks(peaks, height);
    let res = 0;

    console.log(peaks.map(p => height[p]), foldedPeacks.map(p => height[p]));
    for (let i=0; i < foldedPeacks.length - 1; i++) {
        res = res + countWaterArea(foldedPeacks[i], foldedPeacks[i + 1], height);
    }

    return res;
};

function countWaterArea(left, right, height) {
    const waterLevel = Math.min(height[left], height[right]);
    let res = 0;

    for (let i=left; i < right; i++) {
        if (height[i] <= waterLevel) {
            res = res + waterLevel - height[i];
        }
    }

    return res;
}

function findAllPeacks(height) {
    height.push(0);

    const peaks = [];
    let last = 0;

    for (let i=0; i < height.length; i++) {
        let h = height[i];

        if (last <= h) {
            last = h;
        } else {
            peaks.push(i - 1);

            while (last >= height[i]) {
                last = height[i];
                i++;
            }

            last = height[i];
        }
    }

    return peaks;
}

function foldPeaks (peackIndexes, height) {
    let stack = [];
    let maxVal = 0;

    peackIndexes.forEach(peakIndex => {
        const currentValue = height[peakIndex];

        while ((stack.length > 1)
        && (currentValue > height[stack.last()])
        && (height[stack.last()] < maxVal)) {
            stack.pop();
        }

        maxVal = Math.max(maxVal, currentValue);
        stack.push(peakIndex);
    });

    return stack;
}
