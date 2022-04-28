const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  s1 = s1.replace(/,/g,'',).split('');
  s2 = s2.replace(/,/g,'',).split('');

  obj1 = {}
  obj2 = {}
  result = 0
  for (let i of s1){
      if(!obj1[i]){
          obj1[i] = 0;
      }

      obj1[i] += 1
  }

  for(let i of s2){
      if(!obj2[i]){
          obj2[i] = 0
      }

      obj2[i] += 1
  }

  for(let i in obj1){
      if(i in obj2){
          result += Math.min(obj1[i], obj2[i])
      }
  }
  return result
}


module.exports = {
  getCommonCharacterCount
};
