const { pasteAccount } = require('hibp');

/**
 * Fetches all pastes for an account (email address).
 *
 * @param {string} email the email address to query
 * @returns {any} an array of paste objects (or null if no pastes were found)
 */
module.exports = async email => pasteAccount(email);
