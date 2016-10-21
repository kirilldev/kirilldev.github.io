/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k, buffer=[]) {
    let res = [];

    while (n >= k) {
        let newBuffer = buffer.concat(n--);

        if (k === 1) {
            res.push(newBuffer);
        } else {
            let combined = combine(n, k - 1, newBuffer);
            res = res.concat(combined);
        }
    }

    return res;
}