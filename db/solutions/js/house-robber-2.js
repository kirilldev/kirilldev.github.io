/**
 * @param {number[]} homes
 * @return {number}
 */
const rob = function (homes) {
    function robRange(subHomes) {
        let loot = [];

        if (subHomes.length < 2) {
            return subHomes.length === 1 ? subHomes[0] : 0;
        }

        loot.push(subHomes[0], Math.max(subHomes[1], subHomes[0]));

        for (let i = 2; i < subHomes.length; i++) {
            const lootIfTakeCurrent = loot[i - 2] + subHomes[i];
            const lootIfSckipCurrent = loot[i - 1];

            loot.push(Math.max(lootIfTakeCurrent, lootIfSckipCurrent));
        }

        return loot.pop();
    }

    if (homes.length < 2) {
        return homes.length === 1 ? homes[0] : 0;
    }

    const val1 = robRange(homes.slice(0, homes.length - 1));
    const val2 = robRange(homes.slice(1, homes.length));
    return Math.max(val1, val2);
};
