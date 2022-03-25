const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let count = 0;
    let result;
    for (let row in matrix) {
        result = matrix[row].filter((element) => element === "^^");
        count += result.length;
    }

    return count;
}

module.exports = {
    countCats,
};
