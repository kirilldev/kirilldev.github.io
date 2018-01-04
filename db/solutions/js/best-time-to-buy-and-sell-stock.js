/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let maxIndex = prices.length - 1;
    let bestDeal = 0;

    for (let i = maxIndex; i >= 0; i--) {
        maxIndex = prices[maxIndex] < prices[i] ? i : maxIndex;
        const diff = prices[maxIndex] - prices[i];
        bestDeal = Math.max(bestDeal, diff);
    }

    return bestDeal;
}