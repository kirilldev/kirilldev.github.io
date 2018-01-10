/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const sortedCoins = coins.sort((a, b) => a - b);
    const matrix = [];

    sortedCoins.forEach((coin, i) => {
        matrix.push([0]);

        for (let j = 1; j <= amount; j++) {
            const diff = j - coin;

            if (diff < 0 || matrix[i][diff] === -1) {
                matrix[i][j] = (!i) ? -1 : matrix[i - 1][j];
            } else {
                const prevRowRes = matrix[i - 1][j];
                const thatRowRes = matrix[i][diff] + 1;

                if (i && prevRowRes !== -1) {
                    matrix[i][j] = Math.min(thatRowRes, prevRowRes);
                } else {
                    matrix[i][j] = thatRowRes;
                }
            }
        }
    });

    return matrix.pop().pop();
}