const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = 0;

  for (let row = 0; row < arr.length; row++) {
    for (let column in arr[row]) {
      if (row === 0 || arr[row - 1][column] !== 0) {
        sum += arr[row][column];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
