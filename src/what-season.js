const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (
    (date instanceof Date === false ||
      Object.getOwnPropertyNames(date).length > 0) &&
    arguments.length > 0
  ) {
    throw new Error("Invalid date!");
  }
  date = new Date(date);
  const month = date.getMonth();
  if (month === 11 || month < 2) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 8) {
    return "summer";
  } else if (month >= 8 && month < 11) {
    return "autumn";
  } else {
    return "Unable to determine the time of year!";
  }
}

module.exports = {
  getSeason,
};
