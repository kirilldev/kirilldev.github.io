/**
 *
 * @param arr
 * @param start
 * @param end
 * @returns {*} count
 */
function countOnes(arr, start = 0, end = arr.length) {
    const med = (start + end) >>> 1;

    if (arr[med] === 1) {

        if (arr[med + 1] !== 1) {
            return med + 1;
        }

        return countOnes(arr, med + 1, end);
    }

    if (arr[med - 1] !== 0) {
        return med;
    }

    return countOnes(arr, start, med - 1);
}