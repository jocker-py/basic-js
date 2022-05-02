const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 1;
  }

  calculateDepth(arr) {
    if (arr.some(item => Array.isArray(item))) {
      this.count += 1;
      return this.calculateDepth(arr.flat())
    } else {
      const result = this.count;
      this.count = 1;
      return result
    }
  }
}

module.exports = {
  DepthCalculator
};
