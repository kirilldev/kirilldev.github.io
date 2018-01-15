/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const parts = str.split(/ +/g);

    if (parts.length !== pattern.length)  {
        return false;
    }

    const forwardMap = new Map();
    const backwardMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        let mapped = forwardMap.get(char);

        if (!mapped && !backwardMap.get(parts[i])) {
            mapped = parts[i];
            forwardMap.set(char, mapped);
            backwardMap.set(mapped, char);
        }

        if (parts[i] !== mapped) {
            return false;
        }
    }

    return true;
};