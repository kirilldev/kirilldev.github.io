/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const count = (i, j) => {
        if (grid[i][j] === 0) return 0;
        const a = grid[i][j + 1] || 0;
        const b = grid[i][j - 1] || 0;
        const c = grid[i + 1] ? grid[i + 1][j] : 0;
        const d = grid[i - 1] ? grid[i - 1][j] : 0;
        return Number(!a) + Number(!b) + Number(!c) + Number(!d);
    };

    return grid.reduce((sum, row, i) => {
        return row.reduce((s, _, j) => s + count(i, j), sum);
    }, 0);
};