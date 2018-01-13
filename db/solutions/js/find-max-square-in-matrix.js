/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    const firstRow = matrix[0] || [];
    const tmp = [firstRow.map(Number)];
    let max = Number(firstRow.includes('1'));

    for (let i = 1; i < matrix.length; i++) {
        const firstInRow = Number(matrix[i][0]);

        max = Math.max(max, firstInRow);
        tmp.push([firstInRow]);

        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === '0') {
                tmp[i][j] = 0;
            } else {
                const min = Math.min(tmp[i - 1][j], tmp[i][j - 1], tmp[i - 1][j - 1]);
                tmp[i][j] = Math.pow(Math.sqrt(min) + 1, 2);
                max = Math.max(max, tmp[i][j]);
            }
        }
    }

    return max;
}