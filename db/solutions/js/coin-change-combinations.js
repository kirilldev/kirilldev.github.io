/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount === 0) return 1;

    const tmp = [];
    const sortedCoins = coins.sort((a, b) => a - b);

    sortedCoins.forEach((coin, i) => {
        tmp.push([1]);

        for (let j=1; j <= amount; j++) {
            const diff = j - coin;

            if (diff < 0) {
                tmp[i][j] = (i === 0) ? 0 : tmp[i - 1][j];
            } else {
                const prevVal = (i === 0) ? 0 : tmp[i - 1][j];
                tmp[i][j] = prevVal + tmp[i][diff];
            }
        }
    });

    return tmp.length ? tmp.pop().pop() : 0;
};