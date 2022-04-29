const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const dnsStat = {};

  domains.forEach((domain) => {
      domain = domain.split(".").reverse();
      let str = "";

      domain.forEach((element) => {
          str += `.${element}`;
          if (!dnsStat.hasOwnProperty(str)) {
              dnsStat[str] = 0;
          }
          dnsStat[str] += 1;
      });
  });

  return dnsStat;
}


module.exports = {
  getDNSStats
};
