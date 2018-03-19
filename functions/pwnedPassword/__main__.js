const { pwnedPassword } = require('hibp');

/**
 * Securely fetches the number of times the given password has been exposed in a
 * breach.
 *
 * @param {string} password a password (plain text string)
 * @returns {number} the number of times the password has been exposed in a breach
 */
module.exports = async password => pwnedPassword(password);
