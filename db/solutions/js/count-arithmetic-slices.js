/**
 * @param {number[]} A
 * @return {number}
 */
function numberOfArithmeticSlices(A) {
    let res = 0;

    if (A.length < 3) {
        return res;
    }

    const countSlices = x => 0.5 * (x - 2) * (x - 1);

    let interval = A[0] - A[1];
    let len = 2;

    for (let i = 2; i < A.length; i++) {
        const diff = A[i - 1] - A[i];

        if (interval === diff) {
            len++;
        } else {
            res = res + countSlices(len);
            interval = diff;
            len = 2;
        }
    }

    res = res + countSlices(len);

    return res;
}
