const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    n = n.toString();
    let result = [];
    let arr = n.split("");
    let item;
    let prev;
    let next;
    for (let i in arr) {
        if (i === 0) {
            item = arr.slice(1);
        } else if (i === arr.length - 1) {
            item = arr.slice(0, -1);
        } else {
            prev = arr.slice(0, i);
            next = arr.slice(i);
            item = prev.concat(next.slice(1));
        }

        result.push(Number(item.join("")));
    }

    return Math.max(...result);
}
module.exports = {
    deleteDigit,
};
