/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    let tmp = triangle[0];

    for (let i = 0; i < triangle.length - 1; i++) {
        const nextTmp = (new Array(triangle[i + 1].length)).fill(Infinity);

        for (let j = 0; j < nextTmp.length - 1; j++) {
            nextTmp[j] = Math.min(tmp[j] + triangle[i + 1][j], nextTmp[j]);
            nextTmp[j + 1] = Math.min(tmp[j] + triangle[i + 1][j + 1], nextTmp[j + 1]);
        }

        tmp = nextTmp;
    }

    return Math.min.apply(null, tmp);
}
