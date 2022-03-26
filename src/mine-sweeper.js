const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function sumOfMines(arr, row, column) {
    let value = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (
                row + i >= 0 &&
                column + j >= 0 &&
                row + i < arr.length &&
                column + j < arr[row].length &&
                (row + i !== row || column + j !== column) &&
                arr[row + i][column + j] === true
            ) {
                value += 1;
            }
        }
    }

    return value;
}

function minesweeper(arr) {
    const result = JSON.parse(JSON.stringify(arr));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result[i][j] = sumOfMines(arr, i, j);
        }
    }
    return result;
}

module.exports = {
    minesweeper,
};
