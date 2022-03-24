const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let con = arr.filter((element) => element > 0);
    con.sort((a, b) => a - b);
    let i = 0;
    for (let j in con) {
        while (arr[i] === -1) {
            i++;
        }
        arr[i] = con[j];
        i++;
    }
    return arr;
}

module.exports = {
    sortByHeight,
};
