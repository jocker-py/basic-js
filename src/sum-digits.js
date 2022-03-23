const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
    if (String(num).length == 1) {
        return num;
    }
    let str = num.toString();
    let arr = str.split("");

    num = arr.reduce((a, b) => Number(a) + Number(b), 0);

    return getSumOfDigits(num);
    // remove line with error and write your code here
}

module.exports = {
    getSumOfDigits,
};
