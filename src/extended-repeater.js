const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = String(str)
  let addition = String(options.addition);
  if (addition === 'undefined'){
    addition = '';
  }
  const separator = options.separator || '+';
  const repeatTimes = options.repeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  
  let rep = new Array(repeatTimes);
  let add = new Array(additionRepeatTimes);

  add.fill(addition);
  add = add.join(`${additionSeparator}`);

  rep.fill(str+add);
  return rep.join(separator);
}

module.exports = {
  repeater
};
