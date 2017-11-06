const { pwnedPassword } = require('hibp');

/**
 * Fetches the pwned status for the given password, indicating whether or not it
 * has been previously exposed in a breach.
 *
 * @param {string} password a password (plain text string or SHA1 hash)
 * @param {boolean} sha1 the pre-hashed password is a hash (default: false)
 * @returns {boolean} whether the password has been exposed in a breach
 */
module.exports = async (password, sha1 = false) =>
  pwnedPassword(password, { isAHash: sha1 });
