/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstaclesobstacleGrid(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    if ((obstacleGrid[0][0] === 1) || (obstacleGrid[m - 1][n - 1] === 1)) {
        return 0;
    }

    const computedPath = [[1]];

    for (let k = 1; k < n; k++) {
        computedPath[0][k] = Math.min(computedPath[0][k - 1], Number(!obstacleGrid[0][k]));
    }

    for (let i = 1; i < m; i++) {
        computedPath[i] = [Math.min(Number(!obstacleGrid[i][0]), computedPath[i - 1][0])];

        for (let j = 1; j < n; j++) {
            computedPath[i][j] = 0;

            if (obstacleGrid[i][j - 1] === 0) {
                computedPath[i][j] = computedPath[i][j - 1];
            }

            if (obstacleGrid[i - 1][j] === 0) {
                computedPath[i][j] = computedPath[i][j] + computedPath[i - 1][j];
            }
        }
    }

    return computedPath[m - 1][n - 1];
}