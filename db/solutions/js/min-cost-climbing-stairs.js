/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    cost.push(0);

    let prevCost = 0;
    let prevPrevCost = 0;

    cost.forEach(el => {
        const currentCost = Math.min(el + prevCost, el + prevPrevCost);
        prevPrevCost = prevCost;
        prevCost = currentCost;
    });

    return prevCost;
}
