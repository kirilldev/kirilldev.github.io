/**
 * @param str {String}
 */
function findMajorityCharacter(str) {
    let count = 1;
    let candidate = str[0];

    for (let i=1; i < str.length; i++) {
        if (str[i] === candidate) {
            count++
        } else {
            count--;
        }

        if (count === 0) {
            count = 1;
            candidate = str[i];
        }
    }

    count = 0;

    for (let j=0; j < str.length; j++) {
        if (candidate === str[j]) {
            count++;
        }
    }

    if (count > str.length / 2) {
        return candidate
    }

    return null;
}