/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    const computedPath = [(new Array(n)).fill(1)];

    for (let i = 1; i < m; i++) {
        computedPath.push([1]);

        for (let j = 1; j < n; j++) {
            computedPath[i][j] = computedPath[i][j - 1] + computedPath[i - 1][j];
        }
    }

    return computedPath[m - 1][n - 1];
}
