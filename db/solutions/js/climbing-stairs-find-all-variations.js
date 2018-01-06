/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    let prevPrev = 1;
    let prev = 2;

    for (let i = n; i > 2; i--) {
        let next = prevPrev + prev;
        prevPrev = prev;
        prev = next;
    }

    return prev;
};