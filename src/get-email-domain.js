const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  const domain = email.split('@');
  const result = domain[domain.length - 1].split('.').slice(-2)  
  return result.join('.')
}

module.exports = {
  getEmailDomain
};
