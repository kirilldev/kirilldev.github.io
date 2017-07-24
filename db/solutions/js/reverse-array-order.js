/**
 * @param {Array} arr
 * @return {void}
 */
function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const j = arr.length - 1 - i;
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}